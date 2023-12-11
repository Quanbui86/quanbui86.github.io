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

function handleFocusUName(){
}
// Xử lí username Label khi focus
inputUN.addEventListener('focus', function() {
    unameLabel.style.transition = 'opacity 1s linear 0.3s'
    unameLabel.style.opacity = '1';
});
// Xử lí username Label khi input username có giá trị

inputUN.addEventListener('blur', function() {
    if (inputUN.value){ 
        unameLabel.style.transition = 'opacity 0.5s linear'
        unameLabel.style.opacity = '1';
    }else {
        unameLabel.style.opacity = '0';
        unameLabel.style.transition = 'opacity 0.5s linear'}
});

inputPass.addEventListener('focus', function(){
    passLabel.style.opacity = '1';
    passLabel.style.transition = 'opacity 1s linear'
});
inputPass.addEventListener('blur', function(){
    if(inputPass.value){
        passLabel.style.opacity = '1';
        passLabel.style.transition = 'opacity 1s linear'
    }else {
        passLabel.style.opacity = '0';
        passLabel.style.transition = "opacity 0.5s linear"
    }
    
});

inputName.addEventListener('focus', function(){
    nameLabel.style.opacity = '1';
    nameLabel.style.transition = 'opacity 1s linear';
})
inputName.addEventListener('blur', function(){
    if(inputName.value){
        nameLabel.style.opacity = '1';
        nameLabel.style.transition = 'opacity 1s linear'
    }else {
        nameLabel.style.opacity = '0';
        nameLabel.style.transition = "opacity 0.5s linear"
    }
    
});

// Xử lí birth Label khi focus vào input birth
inputBirth.addEventListener('focus', function() {
    birthLabel.style.opacity = '1';
    birthLabel.style.transition = 'opacity 1s linear 0.3s'
});
// Xử lí birth Label khi input birth có giá trị

inputBirth.addEventListener('blur', function() {
    if (inputUN.value){ 
        birthLabel.style.opacity = '1';
        birthLabel.style.transition = 'opacity 0.5s linear'
    }else {
        birthLabel.style.opacity = '0';
        birthLabel.style.transition = 'opacity 0.5s linear'}
});
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
