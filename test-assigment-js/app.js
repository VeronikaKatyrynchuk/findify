const toggleSwitch = document.getElementById('input');
const card = document.getElementById('card');


toggleSwitch.addEventListener('click', () => {
    card.classList.toggle('active');
}); 


// slider
const slider = document.getElementById('range');
const output = document.getElementById('input-value');

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

