const logNameLabel = document.querySelector('[class="logName"]')
const logNameInput = document.getElementById('logName')

patternUserName = /(^[a-zA-Z0-9]{4,20}$)/;
patternPass = /^.{4,16}$/;

// Xử lí username Label khi focus

logNameInput.addEventListener('focus', function() {
    logNameLabel.style.opacity = '1'
    logNameLabel.style.color = 'green';
    logNameLabel.style.backgroundColor = 'white';
    //logNameLabel.style.transition = 'opacity 1s linear 0.3s'
});
// Xử lí username Label khi không focus vào input hoặc input username có giá trị

logNameInput.addEventListener('blur', function() {
    if (patternUserName.test(logNameInput.value)){ 
        //logNameLabel.style.transition = 'opacity 0.5s linear'
        logNameLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '0'
    }else {
        logNameLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '1'
        //logNameLabel.style.transition = 'opacity 0.5s linear'
    }
});
const logPassLabel = document.querySelector('[class="logPass"]')
const logPassInput = document.getElementById('logPass')

// Xử lí Password Label khi focus

logPassInput.addEventListener('focus', function() {
    logPassLabel.style.opacity = '1'
    logPassLabel.style.color = 'green';
    logPassLabel.style.backgroundColor = 'white';
});
// Xử lí Password Label khi không focus vào input hoặc input username có giá trị

logPassInput.addEventListener('blur', function() {
    if (patternPass.test(logPassInput.value)){ 
        //logPassLabel.style.transition = 'opacity 0.5s linear'
        logPassLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '0'
    }else {
        logPassLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '1'
        //logPassLabel.style.transition = 'opacity 0.5s linear'
    }
});
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