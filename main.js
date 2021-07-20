let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNo = document.querySelector('.minNum'),
    maxNo = document.querySelector('.maxNum'),
    guessNo = document.querySelector('#guessInput'),
    submitBtn = document.querySelector('#guessBtn'),
    message = document.querySelector('.answerPara')

minNo.textContent = min;
maxNo.textContent = max;

submitBtn.addEventListener('click', function () {
    let guess = parseInt(guessNo.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter number between ' + min + ' and ' + max, 'red');
    }


if(guess == winningNum){
    gameOver(true, winningNum + ' Is Correct! You Win!!')
}

else{
    guessesLeft -= 1;

    if(guessesLeft === 0){
        gameOver(false, 'Game Over! You Lost! The Correct Number Was ' + winningNum)
    }

    else{
        setMessage('Wrong Answer! ' + guessesLeft + ' Attempts Remaining', 'red');
    }
}

//game over
function gameOver(won, msg){
    let color;
    won == true ? color = 'green' : color = 'red'
    guessNo.disabled = true;
    guessNo.style.borderColor = color;
    setMessage(msg, color);
    submitBtn.value = "Play Again";
    submitBtn.className += "play-again";
}

game.addEventListener('mousedown', function (e) {
    if(e.target.className === 'play-again') {
        window.location.reload()
    }
})

});

function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}

function getRandomNum(){
    return Math.floor((Math.random() * (max - min + 1) + min));
}