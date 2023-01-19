import pro1 from '../assets/react_shop.png'
import pro2 from '../assets/react_ott.png'
import pro3 from '../assets/react_todo.png'
import pro4 from '../assets/project_pwa.png'
import pro5 from '../assets/project_web.png'
import pro6 from '../assets/vue_todo.png'

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: 'Lacoste',
    text: '리액트로 제작한 쇼핑몰',
    skill: 'React, json-server, Router, React-Bootstrap, Sass',
    comment: '데이터베이스 역할을 해주는 db.josn파일을 생성하여, 이미지의 url, 가격 등의 정보를 넣어주었습니다. fetch함수를 이용해 API호출을 하였으며, 로그인이 되었을 때에만 상품의 상세페이지를 볼 수 있도록 하였고, 검색 기능을 구현하였습니다. React-Bootstrap과 미디어쿼리를 사용해 반응형으로 작업하였습니다.',
    site: 'https://lacosteshop.netlify.app/',
    code: 'https://github.com/sini1004/LACOSTE'
  },
  {
    imgsrc: pro2,
    title: 'hulu',
    text: '리액트로 제작한 영화목록',
    skill: 'React, Router, React-Bootstrap, Sass',
    comment: 'react-router를 사용해 SPA형태로 구성되었습니다. axios를 활용해 데이터를 불러왔으며, async, await를 사용해 각각의 api를 비동기적으로 불러왔습니다.',
    site: 'https://shinhee-ott-hulu.netlify.app/',
    code: 'https://github.com/sini1004/React_OTT'
  },
  {
    imgsrc: pro3,
    title: 'React_Todo',
    text: '리액트로 제작한 TODO LIST',
    skill: 'React, css Module',
    comment: '투두리스트에 투두아이템을 추가, 삭제할 수 있고, 좌측상단 버튼을 통해 다크 모드를 설정할 수 있습니다. 해당 투두 아이템을 완료했는지에 따라서 필터링도 가능합니다.',
    site: 'https://shinhee-todo.netlify.app/',
    code: 'https://github.com/sini1004/React_TODO'
  },
  {
    imgsrc: pro4,
    title: 'PWA Project',
    text: 'CHWEDU(학생이용 앱)',
    skill: 'html5, css3, jquery, javascript',
    comment: '로그인 시 "@"를 포함한 이메일 형식의 아이디와 5자리 이상 비밀번호를 입력해야 하는 조건을 붙였으며, 로그인시 입력했던 이메일의 "@"앞 자리를 아이디로 인식하여 메인에서 볼 수 있습니다. jsQR 모듈을 이용하여 QR인식을 할 수 있으며, 투두리스트에 할 일 추가, 삭제, 수정을 할 수 있습니다. Math.random()를 이용해 랜덤으로 단어를 볼 수 있게 하였습니다.',
    site: 'https://sini1004.github.io/PWA_CHWEDU/',
    code: 'https://github.com/sini1004/PWA_CHWEDU/'
  },
  {
    imgsrc: pro5,
    title: 'Responsive Site',
    text: '뚜레쥬르 리디자인',
    skill: 'html5, css3, jquery',
    comment: '미디어 쿼리를 이용하여 디바이스 종류에 따라 유연하게 보여지는 반응형 작업을 진행한 뚜레쥬르 사이트입니다.  자바스크립트 라이브러리인 jQuery를 이용했고, 이미지 슬라이드를 구현하기 위해 Swipper를 사용하였습니다.',
    site: 'https://sini1004.github.io/WebSite_Touslesjours/',
    code: 'https://github.com/sini1004/WebSite_Touslesjours'
  },
  {
    imgsrc: pro6,
    title: 'Check List',
    text: '뷰로 제작한 CHECK LIST',
    skill: 'html5, css3, jquery',
    comment: 'localStorage 사용으로 브라우저를 열었을 때 이전에 입력해둔 내용을 유지할 수 있습니다. TransitionGroup 컴포넌트를 사용하여 체크리스트 등록 및 삭제 시 애니메이션을 적용하였습니다.',
    site: 'https://shinhee-vue-checklist.netlify.app/',
    code: 'https://github.com/sini1004/Vue_TODO'
  }
];

export default ProjectCardData