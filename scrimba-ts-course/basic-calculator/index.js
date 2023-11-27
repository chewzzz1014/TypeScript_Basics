// Benefits of TypeScript
// challenges:
// - give the screens innerHTML a string
// - change the two input values to numbers
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
var screen = document.querySelector('.screen');
function addNumbers(a, b) {
    screen.innerHTML = a + b;
}
button.addEventListener('click', function () { return addNumbers(firstInput.value, secondInput.value); });
