// grabs all controls into one variable
const inputs = document.querySelectorAll('.controls input');
// sets suffix = the dataset of 2 needed properties; then changes the value of those properties
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};
// event listeners any change or mousemove on the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
