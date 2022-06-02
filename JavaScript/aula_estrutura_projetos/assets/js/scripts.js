var currentNumber = document.getElementById('currentNumber')

function increment() {
    if (currentNumber.innerHTML < 10) {
        currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1
    }
}

function decrement() {
    if (currentNumber.innerHTML > 0) {
        currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1
    }
}