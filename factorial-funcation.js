function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var fristFactorial = getFactorial(7);
console.log('factorial of 7is on my life', fristFactorial);

var secondFactorial = getFactorial(9);
console.log('Factorial is escond man', secondFactorial);