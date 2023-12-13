const unameLabel = document.querySelector('[class="username"]')
const passLabel = document.querySelector('[class="password"]')
const nameLabel = document.querySelector('[class="name"]')
const birthLabel = document.querySelector('[class="birth"]')

const allLabel = document.querySelectorAll('label')
const inputFields = document.querySelectorAll('input');

const inputName = document.getElementById('name')
const inputUN = document.querySelector('[id="username"]');
const inputPass = document.querySelector('[id="password"]');
const inputBirth = document.getElementById('birth')

patternUserName = /(^[a-zA-Z0-9]{4,20}$)/;
patternPass = /^.{4,16}$/;
patternName = /^[a-zA-Z\x20]{4,20}$/;
function handleFocusUName(){
}
// Xử lí username Label khi focus
inputUN.addEventListener('focus', function() {
    unameLabel.style.opacity = '1';
    unameLabel.style.color = 'green';
    unameLabel.style.backgroundColor = 'white';
});
// Xử lí username Label khi không focus vào input hoặc input username có giá trị

inputUN.addEventListener('blur', function() {
    if (patternUserName.test(inputUN.value)){ 
        unameLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '0'
    }else {
        unameLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '1'
    }
});

inputPass.addEventListener('focus', function(){
    passLabel.style.opacity = '1';
    passLabel.style.color = 'green';
    passLabel.style.backgroundColor = 'white';
});
inputPass.addEventListener('blur', function(){
    if(patternPass.test(inputPass.value)){
        passLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '0'
    }else {
        passLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '1'
    }    
});

inputName.addEventListener('focus', function(){
    nameLabel.style.opacity = '1';
    nameLabel.style.color = 'green';
    nameLabel.style.backgroundColor = 'white';
})
inputName.addEventListener('blur', function(){
    if(patternName.test(inputName.value)){
        nameLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[2].style.opacity = '0';
    }else {
        nameLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[2].style.opacity = '1'
    }
    
});

// Xử lí birth Label khi focus vào input birth
inputBirth.addEventListener('focus', function() {
    birthLabel.style.opacity = '1';
    birthLabel.style.color = 'green';
    birthLabel.style.backgroundColor = 'white';
});
// Xử lí birth Label khi input birth có giá trị

inputBirth.addEventListener('blur', function() {
    if (Boolean(inputBirth.value)){ 
        birthLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[3].style.opacity = '0'
    }else {
        birthLabel.style.opacity = '0';
        document.getElementsByClassName('errorMsgDiv')[3].style.opacity = '1'
    }
});

// Hiệu ứng khi fade-in sử dụng DOMContentLoaded, chạy trước khi file HTML load xong
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