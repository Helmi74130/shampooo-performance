AOS.init();

let bgImg = document.querySelector('#bgImg');
let progressBar = document.querySelector('.progress-bar')
let subTitleText = document.querySelector('#subTitleText')

let subTitle = ['Nettoyage auto  de qualité supérieure en exclusivité sur Djerba', 
                'Des Produits de qualité supérieure et des techniques de nettoyage professionnelles pour redonner à votre véhicule tout son éclat et sa brillance',
                'Votre véhicule mérite le meilleur et nous sommes là pour le lui offrir',
                'Une expérience de lavage luxueuse pour votre véhicule'
              ]

setInterval(()=>{
  change();
  changeTextSubTitle()
}, 5000)

function change(){
  if (bgImg.classList.contains('brabus')) {
    bgImg.classList.add('ferrari')
    bgImg.classList.remove('brabus')
     
  }else if (bgImg.classList.contains('ferrari')){
    bgImg.classList.add('alfa')
    bgImg.classList.remove('ferrari')

  }else if (bgImg.classList.contains('alfa')){
    bgImg.classList.add('fuel')
    bgImg.classList.remove('alfa')
  }else if (bgImg.classList.contains('fuel')){
    bgImg.classList.add('brabus')
    bgImg.classList.remove('fuel')
  }
}


let count = 0;
let compteur = 0;

function changeTextSubTitle(){
    compteur ++
    if (compteur === subTitle.length) {
      compteur = 0
    }
}

function time(){
  setInterval(() => {
    count+= 25
    subTitleText.innerText = subTitle[compteur]
    progressBar.style.width = `${count}%`
    if (count === 100) {
      setTimeout(() => {
        count = 0
        progressBar.style.width = '0%'
      }, 1000);
    }
  }, 1000);
}

if (progressBar.style.width === '0%') {
  time()
}

let iconWhatsapp = document.querySelector('.whatsapp');

function removeNone(){
  iconWhatsapp.classList.remove('none');
  iconWhatsapp.classList.add('bounce-in-top');
}
setTimeout(()=>{
  removeNone()
},8000)

let header = document.querySelector('#header')

/* window.addEventListener("scroll", ()=>{
  if (window.scrollY > 1000) {
    header.classList.add('fixed-top')
    header.classList.add('slide-in-top')
  }else{
    header.classList.remove('slide-in-top')
    header.classList.remove('fixed-top')
    
  }
}) */

