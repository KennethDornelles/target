function pertenceAFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === a || num === b) return `${num} pertence à sequência de Fibonacci`;

    let next = a + b;

    while (next <= num) {
        if (next === num) return `${num} pertence à sequência de Fibonacci`;

        a = b;
        b = next;
        next = a + b;
    }

    return `${num} não pertence à sequência de Fibonacci`;
}

let numero = 21;
console.log(pertenceAFibonacci(numero));
