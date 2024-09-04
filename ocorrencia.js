function contarA(str) {
    let count = 0;

    for (let char of str) {
        if (char === 'a' || char === 'A') {
            count++;
        }
    }

    return `A letra 'a' aparece ${count} vezes na string.`;
}

// Testando a função
let string = "Abracadabra"; // você pode alterar a string aqui
console.log(contarA(string));
