const slider = document.getElementById('range');
const output = document.getElementById('input-value');

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};
