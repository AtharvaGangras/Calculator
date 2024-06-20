function add(a,b){
    return Number(a) + Number(b);
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let number1 ='';
let number2 = '';
let operator = '';

function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return undefined;
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');


function appendNumberOnDisplay(id){
    display.textContent += id;
    number2 +=id;

}
function appendOperatorOnDisplay(id){
    //only allow one operator on display at a time
    //if operator in between first evaluate the current expression
    if(operator && number2){
        number2 = operate(number1,number2,operator);
        operator = '';
        number1 = '';
    }
    operator = id;
    if(number2) number1 = number2;
    number2 = '';

    //print the number on display
    if(operator === '=') operator = '';
    display.textContent = number1+operator;
    if(operator === ''){
        number2 = number1;
        number1='';
    }

    



}

function clearDisplay(){
    number1 = '';
    number2 = '';
    operator = '';
    display.textContent = '';
}
function backspace(){

}

container.addEventListener('click',(e)=>{
    if(container === e.target) return;
    if(e.target === display) return;
    const clickedButton = e.target;
    console.log(clickedButton);
    if(+clickedButton.id>= 0 || +clickedButton.id<=9)
    {
        appendNumberOnDisplay(clickedButton.id);
    }
    else if(clickedButton.id === 'AC') clearDisplay();
    else if(clickedButton.id === 'backspace') backspace();
    else{
        appendOperatorOnDisplay(clickedButton.id);
    }
})

