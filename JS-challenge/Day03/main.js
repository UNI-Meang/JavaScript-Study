const form = document.getElementById('mainGameForm');
const rangeNumber = document.querySelector('.rangeNum');
const inputNumber = document.getElementById('inptNumber');

function playGame(e){
    e.preventDefault();
    const range = rangeNumber.value;
    const inputValue = inputNumber.value;
    const text = document.querySelector('.hidden');
    const randomNum = Math.ceil(Math.random() * parseInt(range));
    text.innerHTML= `
    <p>You chose: ${inputValue}
    <p>The machine chose: ${randomNum}
    `
    if(randomNum == inputValue){
        text.innerHTML += `
        <p class="msgWon">You won!👏</p>`
    } else {
        text.innerHTML += `<p class="msgLost"> You lost!💩</p>`
    }
}
form.addEventListener('submit', playGame);