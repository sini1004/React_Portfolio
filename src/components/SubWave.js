import { faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons';

const svgDraw = function(el, cor, sp) {
  const path = document.querySelector(el);
  let speed = sp;
  let offset = speed;
  let color = cor;

  set();

  function set() {
    path.style.stroke = color;
    path.style.strokWidth = 3;
    path.style.strokeDasharray = path.getTotalLength() + ',' + path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();

    window.requestAnimationFrame(draw.bind(this))
  }

  function draw(){
    if(speed < path.getTotalLength()){
      path.style.strokeDashoffset = path.getTotalLength() - speed;

      window.requestAnimationFrame(draw.bind(this));
      speed = speed + offset;
    } else if(speed > path.getTotalLength()) {
      path.style.fill = color;
    }
  }
}

svgDraw('.sub-svg', '#0099ff', 20);


export default SubWave