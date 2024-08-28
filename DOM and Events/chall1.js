let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
