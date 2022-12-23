let iconWhatsapp = document.querySelector('.whatsapp');

function removeNone(){
  iconWhatsapp.classList.remove('none');
  iconWhatsapp.classList.add('bounce-in-top');
}
setTimeout(()=>{
  removeNone()
},8000)
