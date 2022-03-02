// 메뉴 이동 및 사진 전환
function setMenu(_menu) {
  let menus =document.querySelectorAll(".sidebar__nav li");
  menus.forEach(function(menu){
    menu.classList.remove("on");
  })
  document.querySelector(".sidebar__nav li." + _menu).classList.add("on");
  document.querySelector("main").className=_menu;
}

//데이터 불러와 메인 화면 구성
function showVideoClips() {
  const videolist =document.querySelector("#home .video-list");

  videos.forEach(function (video){
    let videoNode = document.querySelector("#home article.video-item").cloneNode(true);
    videoNode.removeAttribute("hidden");
    videoNode.querySelector(".thumbnail").src='./img/' + video.thumbnail_src;
    videoNode.querySelector(".profile").src='./img/' + video.profile_src;
    videoNode.querySelector(".title").innerHTML = video.title;
    videoNode.querySelector(".author").innerHTML = video.author;
    videoNode.querySelector(".stat").innerHTML = video.stat;
    
    videolist.append(videoNode);
    })
  }
    
//시
function init() {
  showVideoClips();
}


document.addEventListener('DOMContentLoaded', () => {
  // DOM이 load되면 init함수 실행
  init();
});