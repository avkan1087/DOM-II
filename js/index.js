// Your code goes here



//mouseover
const letsGo = document.querySelector('.logo-heading');

letsGo.addEventListener('mouseover', (event) => {
  event.target.style.color = 'purple';

})

 //keydown

const keyDown = document.querySelector('.test');

keyDown.addEventListener('keydown', () => {
  letsGo.style.color = 'blue';

})
 //wheel
const mapImg = document.querySelector('.img-content img');

 function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(.125, scale), 4);

  mapImg.style.transform = `scale(${scale})`;
}

let scale = 1;

mapImg.onwheel = zoom;


 //drag / drop


 ///load


 //focus
 //resize
 //scroll
 document.addEventListener('scroll',() => {

     console.log('test scrolling');

 });
 //select

 //dblclick
 const logo = document.querySelector('.logo-heading');

 logo.addEventListener('dblclick', (event) => {
     event.target.innerHTML = 'dblclick works';
 });

 const mainImg = document.querySelector('.intro img');

 mainImg.addEventListener('dblclick', (event) => {
     event.target.style.padding = '30%';
 });
