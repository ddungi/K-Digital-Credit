# K-Digital-Credit
프로그래밍 기초_KDC (K-Digital Credit)을 학습하고 만든 과제입니다. 

## phtoupload

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


![image](https://user-images.githubusercontent.com/88040158/154393811-6984edf2-e992-4c5c-8a1a-1ca77f4d8ca3.png)
*전체 화면을 한번에 표시하기 위해 화면비율을 줄였습니다. 
<br>
- HTML, CSS 파일까지 작성하여 사진 업로드 포트폴리오 정적 사이트 과제입니다. 
- HTML 요소에 id, class를 주고 css에 연결하는 방법을 학습하여 적용했습니다.
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
  <br>
