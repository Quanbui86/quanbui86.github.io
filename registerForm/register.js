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
    //unameLabel.style.transition = 'all 1s linear 0.3s'
});
// Xử lí username Label khi không focus vào input hoặc input username có giá trị

inputUN.addEventListener('blur', function() {
    if (patternUserName.test(inputUN.value)){ 
        //unameLabel.style.transition = 'opacity 0.5s linear'
        unameLabel.style.opacity = '1';
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '0'
    }else {
        unameLabel.style.opacity = '0';
        //unameLabel.style.transition = 'opacity 0.5s linear'
        document.getElementsByClassName('errorMsgDiv')[0].style.opacity = '1'
    }
});

inputPass.addEventListener('focus', function(){
    passLabel.style.opacity = '1';
    passLabel.style.color = 'green';
    passLabel.style.backgroundColor = 'white';
    //passLabel.style.transition = 'opacity 1s linear 0.3s'
});
inputPass.addEventListener('blur', function(){
    if(patternPass.test(inputPass.value)){
        passLabel.style.opacity = '1';
        //passLabel.style.transition = 'opacity 1s linear';
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '0'
    }else {
        passLabel.style.opacity = '0';
       // passLabel.style.transition = "opacity 0.5s linear";
        document.getElementsByClassName('errorMsgDiv')[1].style.opacity = '1'
    }    
});

inputName.addEventListener('focus', function(){
    nameLabel.style.opacity = '1';
    nameLabel.style.color = 'green';
    nameLabel.style.backgroundColor = 'white';
    //nameLabel.style.transition = 'opacity 1s linear 0.3s';
})
inputName.addEventListener('blur', function(){
    if(patternName.test(inputName.value)){
        nameLabel.style.opacity = '1';
        //nameLabel.style.transition = 'opacity 1s linear';
        document.getElementsByClassName('errorMsgDiv')[2].style.opacity = '0';
    }else {
        nameLabel.style.opacity = '0';
        //nameLabel.style.transition = "opacity 0.5s linear";
        document.getElementsByClassName('errorMsgDiv')[2].style.opacity = '1'
    }
    
});

// Xử lí birth Label khi focus vào input birth
inputBirth.addEventListener('focus', function() {
    birthLabel.style.opacity = '1';
    birthLabel.style.color = 'green';
    birthLabel.style.backgroundColor = 'white';
    //birthLabel.style.transition = 'opacity 1s linear 0.3s'
});
// Xử lí birth Label khi input birth có giá trị

inputBirth.addEventListener('blur', function() {
    if (Boolean(inputBirth.value)){ 
        birthLabel.style.opacity = '1';
        //birthLabel.style.transition = 'opacity 0.5s linear'
        document.getElementsByClassName('errorMsgDiv')[3].style.opacity = '0'
    }else {
        birthLabel.style.opacity = '0';
        //birthLabel.style.transition = 'opacity 0.5s linear'};
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


/*
inputUN.addEventListener('input', function() {
    if (inputUN.value){ 
        unameLabel.style.transition = 'opacity 1s linear'
        unameLabel.style.opacity = '1';
    }else unameLabel.style.opacity = '0';
});
*/
    // This code will be executed when the input field loses focus

/*function handleFocusUName(){
    allLabel.forEach(label => label.style.visibility = 'hidden');
    unameLabel.style.visibility = 'visible';
    
    inputFields.forEach(input => {
        input.placeholder = input.name;
    });
    const inputUname = document.querySelector('[id="username"]');
    inputUname.placeholder = ''
}*/

function handleFocusPass(){

    
    

}
/*
function handleFocusName(){
    allLabel.forEach(label => label.style.visibility = 'hidden');
    nameLabel.style.visibility = 'visible';
    inputFields.forEach(input => {
        input.placeholder = input.name;
    });
    const inputPass = document.querySelector('[id="name"]');
    inputPass.placeholder = ''
}
function handleFocusBirth(){
    allLabel.forEach(label => label.style.visibility = 'hidden');
    birthLabel.style.visibility = 'visible';
    inputFields.forEach(input => {
        input.placeholder = input.name;
    });
    const inputPass = document.querySelector('[id="birth"]');
    inputPass.placeholder = ''
}
*/
