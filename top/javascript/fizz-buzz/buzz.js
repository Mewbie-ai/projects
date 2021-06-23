let answer = parseInt(prompt('Enter a number'));
const btn = document.querySelector('button');
for (let i = 1; i <= answer; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzBuzz');        
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');        
    } else {
        console.log(i);
    }
}
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });