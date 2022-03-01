# K-Digital-Credit
프로그래밍 기초_KDC (K-Digital Credit)을 학습하고 만든 과제입니다. 

## phtoupload

<br>

![image](https://user-images.githubusercontent.com/88040158/154393513-6627644e-d82e-4953-9c58-dd43333758c3.png)
*전체 화면을 한번에 표시하기 위해 화면비율을 줄였습니다. 
<br>
- style이 모두 주어진 상태에서 HTML을 구성하는 과제 입니다. 
- 기본적인 태그들로 HTML 문서를 구성했습니다. 
- HTML의 표 만들기( `<tr>, <th>, <td>` )를 이용해 사진 업로드 폼을 구성했습니다.
- `<label>, <input>, <select>, <option>, <textarea>` 태그를 이용해 입력값을 받는 문서를 만들었습니다. 
- `<button> `을 이용해 최종 입력값 제출하는 버튼을 만들고 type별 제출을  다르게 구성했습니다. 

<BR>

## fastcampus_portfolio

<br>
  
![image](https://user-images.githubusercontent.com/88040158/154393811-6984edf2-e992-4c5c-8a1a-1ca77f4d8ca3.png)
*전체 화면을 한번에 표시하기 위해 화면비율을 줄였습니다. 

<br>

- HTML, CSS 파일까지 작성하여 사진 업로드 포트폴리오 정적 사이트 과제입니다. 
- HTML 요소에 id, class를 주고 css*전체 화면을 한번에 표시하기 위해 화면비율을 줄였습니다. 
까지 작성하여 사진 업로드 포트폴리오 정적 사이트 과제입니다. 에 연결하는 방법을 학습하여 적용했습니다.
- 최상위 부모 요소는 id를 주어 유일한 속성을 가지게 하였습니다.
- 나머지 요소와 반복되는 요소들에는 class 속성을 주었습니다.
- reset.css를 이용해 초반 css를 다른 웹사이트와 동일한 조건으로 만들었습니다.
- class="on"을 주어 nav, aside에서 현재 어느 위치에 있는지 표시하게 만들었습니다.  
- display, positon으로 전체적인 레이아웃을 구성하는 방법을 학습하여 적용하였습니다.
- 특히 많은 부분에 display: grid; 를 이용해 레이아웃을 구성했습니다.
> - 위쪽의 header 의 logo, nav, logout로 나눈 레이아웃
> - main 화면의 왼쪽의 보기 옵션 aside 바와 contents를 나누는 레이아웃
> - 업로드된 사진을 보여주는 부분의 하트, 이름, 묘사 부분을 구성하는 레이아웃
> - positon: fixed; 를 이용해 화면의 스크롤이 움직여도 header, aside, 오른쪽 아래의 camera는 고정된 곳에 위치하게 했습니다.
> - css의 hover 요소를 이용해 커서가 올라가면 색이 변하게 적용했습니다.

- 문제
> - 카메라 이미지와 배경을 따로 고정하여 적용하였다.
> : 최종 참고용 자료를 보니 상위 클래스에 위치와 포지션만 저장해주고 그 내부에 div를 생성하고 background-image를 적용해 카메라 사진을 넣어주었다. 

<BR>

## fastcampus_portfolio_with_JS
  
<br>
  
![1](https://user-images.githubusercontent.com/88040158/156130810-233faca5-7f75-4b4f-9367-69072b6a36b0.PNG)

*전체 화면을 한번에 표시하기 위해 화면비율을 줄였습니다. 

*HTML, CSS 외 JavaScript 요소 중심으로 기술되었습니다. 
<br>
- function init(){...}
> - 브라우저가 열렸을 때 시작되는 함수들 입니다.

- function setMenu(_menu){...}
> - nav 메뉴 요소의 현 위치를 나타내는 css 요소를 지정했습니다. 
> - main 요소가 변경됨에 따라 css 요소의 display를 none, block으로 지정하여 메뉴에 따라 화면 전환이 가능하게 만들었습니다.

- function showPhotos(){...}
> - 현존하는 사진과 데이터를 삭제하고 적용된 정렬, 필터 함수를 바탕으로 화면에 사진들을 나타내는 함수입니다.
> - hidden 클래스를 만들어 cloneNode를 이용했습니다. html 유지 및 보수가 쉬워지며 반복적인 일처리를 효율적으로 구현할 수 있었습니다. 
> - data.js. 내 my_info에 저장된 내가 누른 좋아요가 화면에 적용되게끔 만들었습니다. 

![2](https://user-images.githubusercontent.com/88040158/156142038-70280448-eacc-498a-b37f-e328817ac18c.PNG)
<br>

![3](https://user-images.githubusercontent.com/88040158/156142145-cc64806f-2a95-4101-acb5-fccd6ab7f144.PNG)
<br>

![33](https://user-images.githubusercontent.com/88040158/156142236-ad581fb4-7cb3-4849-9b9d-31627168dbf9.PNG)
<br>


- 정렬, 필터 함수
> - sorts, filters 라는 함수들 묶음을 만들어 처음 보일 함수로 초기화했습니다.
> - function setSort(_sort){...}, function setFilter(_filter){...} 로 현재 적용된 정렬과 필터가 무엇인지 나타냈습니다. 정렬, 필터 후 
showPhotos()를 불러오게 구현했습니다.

- function toggleLike(idx){...}
> - '좋아요' 하지 않은 사진은 나의 '좋아요' 배열에 포함시키고 해당 사진의 좋아요 수를 올리게 만들었습니다. 
> -  '좋아요' 한 사진은 나의 '좋아요' 배열에서 제외시키고 해당 사진의 좋아요 수를 내리게 만들었습니다. 
> - showPhotos에 addEventListener 를 이용해 클릭하면 위 두 가지 상황이 일어나게 구현했습니다.  
> - 마지막에 showPhotos() 를 실행해 모든 화면을 다시 불러왔습니다.

<br>

![4](https://user-images.githubusercontent.com/88040158/156142408-e2fe262a-6592-4e36-9705-e4f95b8ba8fd.PNG)

- 사진 올리기 화면은 대부분 HTML 요소로 구성하였습니다.

<br>
  
![5](https://user-images.githubusercontent.com/88040158/156142462-faf8759f-c502-44b1-b603-9fdf8add4a9e.png)

- function setDescLength(){...} 
> - 사진 설명을 적는 부분 오른쪽에 20글자 제한 수 내 얼마나 글자수를 적고 있는지 나타내었습니다. 

<br>

![6](https://user-images.githubusercontent.com/88040158/156143614-7fd7451d-338d-4836-a2b4-666d52f221f4.PNG)

- function showMyInfo(){...} 
> - data.js 내 my_info를 불러와 정보를 보여주는 함수 입니다.  
> - checkbox 타입의 input은 모든 요소의 체크를 취소하고 forEach문을 통해 재선택해 나타내게 하였습니다.

<br>

![7](https://user-images.githubusercontent.com/88040158/156143619-2180f5eb-43ea-4138-85ba-e14799c22313.PNG)

- function setEditMyInfo(on)
> - 수정 버튼을 누르면 수정 버튼이 사라지고 확인, 취소 버튼이 나오게 구현했습니다.
> - 반대로 확인 버튼을 누르면 확인, 취소 버튼이 사라지고 수정 버튼이 사라지게 구현했습니다.
> - 수정 버튼을 누르면 input을 수정할 수 있게 만들었습니다.

<br>
  
![8](https://user-images.githubusercontent.com/88040158/156143622-df06f640-f51a-4790-9fa1-434caeefc004.png)

- function updateMyInfo(){...}
> - 수정 버튼을 누르고 입력한 값을 data.js에 저장하게 구현했습니다. 
> - 취소 버튼을 누르면 입력했던 값을 무시하고 저장되었던 값을 다시 표시하게 구현했습니다. 

<br>
  
- 문제
> - 좋아요를 토글하는 과정에서 화면을 계속 재호출하는 것은 메모리 낭비가 클 것으로 고려된다.
  
> : 함수를 각 좋아요 html 부분에 적용하거나 showPhotos 함수에 연결해주는 방식이 좋을 것으로 예상된다.


