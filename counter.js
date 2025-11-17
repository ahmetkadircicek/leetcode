currentNumber = 0;
function counter(number) {
    if (currentNumber === 0) {
        currentNumber = number;
    } else {
        currentNumber += 1;
    }
    return currentNumber;
}

console.log(counter(10));
console.log(counter(20));