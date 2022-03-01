 // 화면 시작시 실행되는 함수 
 function init(){
    showPhotos();
    showMyInfo();
}

//메뉴 css 변경 및 화면 변경
function setMenu(_menu){
    var menus = document.querySelectorAll("#nav li");
    menus.forEach(function(menu){
        menu.classList.remove("on");
    })
    document.querySelector("#nav li." +_menu).classList.add("on");
    document.querySelector("main").className = _menu;
}

//사진들 보기 화면
function showPhotos(){
    //현존하는 썸네일들 삭제
    var existingNodes = document.querySelectorAll("#gallery article:not(.hidden)");
    existingNodes.forEach(function (existingNode){
        existingNode.remove();
    })
    
    var filtered =photos.filter(filter);
    filtered.sort(sort);

    //사진들 보기에 data.js 데이터 불러옴
    var gallery = document.querySelector("#gallery");

    filtered.forEach(function (photo){
        var photoNode = document.querySelector(".section_pictures .hidden").cloneNode(true);
        photoNode.classList.remove("hidden");
        photoNode.querySelector(".author").innerHTML =photo.user_name;
        photoNode.querySelector(".desc").innerHTML =photo.description;
        photoNode.querySelector(".like").innerHTML =photo.likes;
        photoNode.querySelector(".like").addEventListener("click", function(){toggleLike(photo.idx)})
        photoNode.querySelector(".photo").style.backgroundImage = "url('./img/photo/" + photo.file_name +"')";

        if (my_info.like.indexOf(photo.idx) > -1){
            photoNode.querySelector(".like").classList.add("on");
        }
        gallery.append(photoNode);
    })  
}

//sorts 정렬 함수 묶음
var sorts = {
    recent :function(a,b){return (a.idx > b.idx) ? -1 : 1},
    like: function(a,b){return (a.likes > b.likes) ? -1 : 1}
}

//현재 정렬 지정
var sort=sorts.recent;

//filters 필터 함수 묶음
var filters = {
    all:function(it){return true;},
    mine:function(it){return it.user_id === my_info.id;},
    like:function(it){return my_info.like.indexOf(it.idx) > -1;},
    follow:function(it){return my_info.follow.indexOf(it.user_id) > -1;} 
}

//현재 필터 지정
var filter=filters.all;

function setSort(_sort){
    var sortButtons = document.querySelectorAll("#sorts > li");
    sortButtons.forEach(function (sortButton){
        sortButton.classList.remove("on");
    })
    document.querySelector("#sorts ." + _sort).classList.add("on");

    sort =sorts[_sort];
    showPhotos();
}

function setFilter(_filter){
    var filterButtons = document.querySelectorAll("#filters > li");
    filterButtons.forEach(function (filterButton){
        filterButton.classList.remove("on");
    })
    document.querySelector("#filters ." + _filter).classList.add("on");

    filter =filters[_filter];
    showPhotos();
}



//좋아요 (좋아요 수 불러오기, 하트 클릭)
function toggleLike(idx){
    if (my_info.like.indexOf(idx) === -1){
        my_info.like.push(idx);
        for (var i =0; i < photos.length; i++){
            if(photos[i].idx ===idx){
                photos[i].likes++;
                break;
            }
        }
    } else {
        my_info.like =my_info.like.filter(
            function(it){return it !== idx;}
        );
        for (var i=0; i <photos.length; i++){
            if (photos[i].idx===idx){
                photos[i].likes--;
                break;
            }
        }

    }

    showPhotos();
}

//사진 올리기의 글자 수
function setDescLength(){
    var descLengthSpan = document.querySelector("span.descLength");
    var descLengthInput = document.querySelector("input.description");
    descLengthSpan.innerHTML =descLengthInput.value.length + "/20";
}

//데이터의 내 정보 불러오기
function showMyInfo(){
    document.querySelector("#myInfoId").innerHTML=my_info.id;
    document.querySelector("#myInfoName").innerHTML=my_info.user_name;
    document.querySelector("#sp-intro").innerHTML=my_info.introduction;
    document.querySelector("#ip-intro").value=my_info.introduction;
    document.querySelector("#myinfo input[type=radio][value=" + my_info.as + "]").checked=true;
    
    document.querySelectorAll("#myinfo input[type=checkbox]").forEach(function(checkbox){
        checkbox.checked=false;
    });
    my_info.interest.forEach(function(interest){
        document.querySelector(
            "#myinfo input[type=checkbox][value=" + interest + "]").checked=true;
    });
    
}

//수정 모드, 저장 모드 설정
function setEditMyInfo(on){
    document.querySelector("#myinfo > div").className = on ? "edit" :"non-edit";
    document.querySelectorAll("#myinfo input").forEach(function(input){
        input.disabled=!on;
    })
    showMyInfo();
}

//업데이트한 내 정보 데이터 저장
function updateMyInfo(){
    my_info.introduction=document.querySelector("#ip-intro").value;
    my_info.as=document.querySelector("#myinfo input[type=radio]:checked").value;
    var interests = [];
    document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checked){
        interests.push(checked.value);
    });
    my_info.interest=interests;

    setEditMyInfo(false);
    showMyInfo();

}
