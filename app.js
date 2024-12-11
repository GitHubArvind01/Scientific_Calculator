const display = document.getElementById('result');

function appendValue(value) {
    if (value === 'π') value = Math.PI;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replaceAll('^', '**');
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

function factorial() {
    try {
        const num = parseInt(display.value);
        if (num < 0 || isNaN(num)) throw Error();
        let fact = 1;
        for (let i = 1; i <= num; i++) fact *= i;
        display.value = fact;
    } catch {
        display.value = 'Error';
    }
}

function reciprocal() {
    try {
        const num = parseFloat(display.value);
        if (num === 0 || isNaN(num)) throw Error();
        display.value = 1 / num;
    } catch {
        display.value = 'Error';
    }
}

// Doesn't work right click button
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the context menu from appearing
});

// Prevent text selection using JavaScript (additional safeguard)
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});