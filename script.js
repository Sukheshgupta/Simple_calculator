/* JavaScript File: script.js */
const result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert('Invalid input!');
    }
}

function clearResult() {
    result.value = '';
}
