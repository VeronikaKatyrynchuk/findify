const toggleSwitch = document.getElementById('input');
const card = document.getElementById('card');


toggleSwitch.addEventListener('click', () => {
    card.classList.toggle('active');
}); 

// range slider
const x = document.getElementById('input');
const y = document.getElementById('output');

const a = 100;
const b = Math.pow(a, 1/a);

function updateOutput(event) {
  y.innerText = Math.floor(a * Math.pow(b, x.value));
}
updateOutput();
x.addEventListener('mousemove', updateOutput);



