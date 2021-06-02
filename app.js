const counter = document.querySelector('h1');
const increaseBtn = document.querySelector('#increase');
const resetBtn = document.querySelector('#reset');
const decreaseBtn = document.querySelector('#decrease');

let count = 0;

if(count > 0) {
    console.log('graeater');
} else if(count < 0) {
    console.log('less than');
}

increaseBtn.addEventListener('click', () => {
    count++
    counter.innerText = count;
    if(count > 0) {
        counter.style.color = 'green';
    }
})

decreaseBtn.addEventListener('click', () => {
    count--
    counter.innerText = count;
    if(count < 0) {
        counter.style.color = 'red';
    }
})

resetBtn.addEventListener('click', () => {
    count = 0
    counter.innerText = count;
    counter.style.color = 'rgb(19, 18, 18)';
})