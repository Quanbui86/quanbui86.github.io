function fadeIn(){
   document.body.style.opacity = '1'
   document.body.style.transition = 'opacity 0.5s linear'
}
document.addEventListener('DOMContentLoaded', fadeIn)
function fadeOut(e){
   setTimeout(()=>{window.location.href=e}, 500) 
   document.body.style.opacity = '0'
   document.body.style.transition = 'opacity 0.5s linear'
}