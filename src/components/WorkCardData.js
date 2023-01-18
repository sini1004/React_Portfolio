import pro1 from '../assets/work_winnen.png'
import pro2 from '../assets/work_o2urea.png'
import pro3 from '../assets/work_bonumpilates.png'
import pro4 from '../assets/work_mestarschool.png'
import pro5 from '../assets/work_yssh.png'
import pro6 from '../assets/work_yssh.png'

const WorkCardData = [
  {
    title: '위넌스터디카페',
    text: '스터디카페 본사 홈페이지',
    skill: 'React, json-server, Router, React-Bootstrap, Sass',
    comment: '데이터베이스 역할을 해주는 db.josn파일을 생성하여, 이미지의 url, 가격 등의 정보를 넣어주었습니다. fetch함수를 이용해 API호출을 하였으며, 로그인이 되었을 때에만 상품의 상세페이지를 볼 수 있도록 하였고, 검색 기능을 구현하였습니다. React-Bootstrap과 미디어쿼리를 사용해 반응형으로 작업하였습니다.',
    site: 'http://winnen.co.kr/',
    code: 'https://github.com/sini1004/LACOSTE'
  },
  {
    title: '코리아케미칼',
    text: '요소수',
    skill: 'React, Router, React-Bootstrap, Sass',
    comment: 'react-router를 사용해 SPA형태로 구성되었습니다. axios를 활용해 데이터를 불러왔으며, async, await를 사용해 각각의 api를 비동기적으로 불러왔습니다.',
    site: 'http://www.o2urea.com/',
    code: 'https://github.com/sini1004/React_OTT'
  },
  {
    title: '보눔필라테스',
    text: 'Todo List',
    skill: 'React, css Module',
    comment: '투두리스트에 투두아이템을 추가, 삭제할 수 있고, 좌측상단 버튼을 통해 다크 모드를 설정할 수 있습니다. 해당 투두 아이템을 완료했는지에 따라서 필터링도 가능합니다.',
    site: 'http://www.bonumpilates.com/',
    code: 'https://github.com/sini1004/React_OTT'
  },
  {
    title: '미스타스키',
    text: 'CHWEDU(학생이용 앱)',
    skill: 'html5, css3, jquery, javascript',
    comment: '그누보드 기반으로 맞춤형 홈페이지를 작업했습니다.',
    site: 'http://mestarschool.com/',
    code: 'https://github.com/sini1004/React_OTT'
  },
  {
    title: '연세에스의원',
    text: '뚜레쥬르 리디자인',
    skill: 'html5, css3, jquery',
    comment: '그누보드 기반으로 기업의 웹사이트와 온라인 쇼핑몰 작업을 진행했습니다.',
    site: 'https://www.yssh.kr/',
    code: 'https://github.com/sini1004/React_OTT'
  },
  
];

export default WorkCardData