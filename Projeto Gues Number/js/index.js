const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
  max: 10,
  attemptsNumber: 0,
  numberDraw: function randomValue() {
    return Math.round(Math.random() * this.max);
  }
};

let numberDraw = Guess.numberDraw();

function updateAttempt(attempt, value) {
  attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
  e.preventDefault();

  let kick = document.getElementById('kick').value;

  if(!kick) {
    alert('Digite Seu Palpite')
    return;
  };

  updateAttemptAttempt(attempt, ++Guess.attemptsNumber);

  if(numberDraw == kick) {
    playAgain();
    status.innerHTML = 'Parabéns Você acertou !';
    result.style.transition = '0,4s';
    result.style.backgroundColor = '#37c978';
    result.style.color = '#fff';
    result.style.color = '#fff';
    clear();
  } else if(numberDraw > kick) {
    status.innerHTML = 'O número informado é maior !';
    status.style.color = '#de4251';
    clear();
  } else if(numberDraw < kick) {
    status.innerHTML = 'O número informado é menor !';
    status.style.color = '#de4251';
    clear();
  }
};

function playAgain() {
  document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
  document.location.reload(true);
};

function clear() {
  document.getElementById('kick').value = '';
};