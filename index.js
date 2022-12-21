const form = document.getElementById('form')
const firstButton = document.getElementById('bnt1')
const secondButton = document.getElementById('btn2')
const userInput = document.getElementById('userName')
const thirdButton = document.getElementById('btn3')
const fourthButton = document.getElementById('btn4')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputCheck()
})

function inputCheck() {
    let userInputValue = userInput.value.trim()

    if(userInputValue == ''){
        displayError(userInput, 'This field cannot be empty')
    } else if(!isNumber(userInputValue)){
        displayError()
    } else if(!isEmail(userInputValue)){
        displayError(userEmail, 'Email is not valid')
    } else {
        displaySuccess(userInput)
    }
}

function displayError(input, errorMessage){
    let formInput = input.parentElement;
    let smallText = formInput.querySelector('small');
    smallText.innerText = errorMessage;
    formInput.className = 'flex-child error';
}

function displaySuccess(input){
    let formInput = input.parentElement;
    formInput.className = "flex-child success";
}