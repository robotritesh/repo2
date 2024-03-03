
let number = 17;


if (number < 2) {
    console.log(number + " is not a prime number.");
} else {
    let isPrime = true;
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
}
