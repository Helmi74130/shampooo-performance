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

let changeImgONclicks = document.querySelectorAll('.clique')
let changeImgONclicksPhones = document.querySelectorAll('.cliques-phone')


if (window.innerWidth < 1000) {
  for (const changeImgONclick of changeImgONclicks) {
    changeImgONclick.classList.add('none')
  }
  for (const changeImgONclicksphone of changeImgONclicksPhones) {
    changeImgONclicksphone.classList.remove('none')
  }
}