const secretNumber = Math.trunc(Math.random() * 20) + 1;
let randomNumber = document.querySelector('.randomNumber');

let score = 20;
let highscore = 0;

let checkBtn = document.querySelector('.checkNumber');
let message = document.querySelector('.message');

const displayMessage = function(text){
    message.textContent = text;
}


checkBtn.addEventListener('click', function() {
    const inputNumber = Number(document.querySelector('.inputNumber').value);
    
    // When there is no input or input is <0
    if(inputNumber <= 0){
        displayMessage('🔢 Please enter a number!')
    }
    // When player wins 
    else if (inputNumber === secretNumber) { 
        displayMessage('🎉 Correct Number!');
        randomNumber.textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        randomNumber.style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When guess is wrong
    else if(inputNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(inputNumber > secretNumber ? '📈 Number is too high!' : '📉 Number is too low!');
            score --;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('💣 You lost the game!');
            document.querySelector('.score').textContent = 0; 
        }
    }
})

const scoreNumber = document.querySelector('.score');
let againBtn = document.querySelector('.again');
let input = document.querySelector('.inputNumber');

againBtn.addEventListener('click', reset);


function reset() {
    score = 20;
    scoreNumber.textContent = score;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    input.value = '';d
    document.querySelector('body').style.backgroundColor = '#262626';
    randomNumber.style.width = '15rem';
    randomNumber.textContent = '?';
}