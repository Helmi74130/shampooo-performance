AOS.init();

let iconWhatsapp = document.querySelector('.whatsapp');

function removeNone(){
  iconWhatsapp.classList.remove('none');
  iconWhatsapp.classList.add('bounce-in-top');
}
setTimeout(()=>{
  removeNone()
},8000)


//Change image on click
let images = document.querySelectorAll('.images')

for (const image of images) {
  image.addEventListener('click', changeImg)
}

function changeImg(e){
  if (e.target.getAttribute('src') !== e.target.dataset.clean) {
    e.target.src = e.target.dataset.clean
  }else if (e.target.getAttribute('src') === e.target.dataset.clean){
    e.target.src = e.target.dataset.switch
    
  }
}

/* 
*Allows you to move the carousel
 */
let slider = document.querySelector('.more');

let starting;
let scrollLeft;
let mouse = false;

function catchSlider(e) {
  starting = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  mouse = true;
};
function releaseSlider() {
  mouse = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouse) { return; };
  let x = e.pageX - slider.offsetLeft;
  let scroll = x - starting;
  slider.scrollLeft = scrollLeft - scroll;
  
});

slider.addEventListener('mousedown', catchSlider, false);
slider.addEventListener('mouseup', releaseSlider, false);
slider.addEventListener('mouseleave', releaseSlider, false);


/* 
 * This function allows to shift the carousel by 1px on each call
 */

let speed = 1;

function loopTime(){
  let sizeForScroll = slider.scrollLeft + slider.offsetWidth
  if ( sizeForScroll < slider.scrollWidth) {
    setTimeout(() => {
      slider.scrollLeft += speed;
      loopTime() 
    }, "50");
  }else{
    setTimeout(()=>{
      slider.scrollLeft = 0;
    loopTime();
    }, '5000');
    
  };
};

loopTime();