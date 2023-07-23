let num = parseInt(prompt("Insira um número inteiro positivo:"));

if (isNaN(num) || num <= 0) {
    alert("Por favor, insira um número inteiro positivo!");
} else {
    if (num % 2 === 0) {
        alert("Número par!");
    } else {
        alert("Número ímpar!");
    }
}