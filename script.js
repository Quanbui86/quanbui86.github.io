const unameLabel = document.querySelector('[for="regName"]')
const passLabel = document.querySelector('[for="regPass"]')
const nameLabel = document.querySelector('[for="name"]')
const birthLabel = document.querySelector('[for="birth"]')
const allLabel = document.querySelectorAll('label')
const inputFields = document.querySelectorAll('input');
function handleFocusUName(){
    allLabel.forEach(label => label.style.visibility = 'hidden');
    unameLabel.style.visibility = 'visible';
    
    inputFields.forEach(input => {
        input.placeholder = input.name;
    });
    const inputUname = document.querySelector('[id="regName"]');
    inputUname.placeholder = ''
}
function handleFocusPass(){
    allLabel.forEach(label => label.style.visibility = 'hidden');
    passLabel.style.visibility = 'visible';
    inputFields.forEach(input => {
        input.placeholder = input.name;
    });
    const inputPass = document.querySelector('[id="regPass"]');
    inputPass.placeholder = ''

}
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
