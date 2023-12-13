function fadeIn(){
   document.body.style.opacity = '1'
   document.body.style.transition = 'opacity 0.3s linear'
}
document.addEventListener('DOMContentLoaded', fadeIn)
function fadeOut(e){
   setTimeout(()=>{window.location.href=e}, 300) 
   document.body.style.opacity = '0'
   document.body.style.transition = 'opacity 0.3s linear'
}