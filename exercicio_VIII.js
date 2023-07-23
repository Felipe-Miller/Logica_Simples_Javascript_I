function mostraResultado(mensagem) {
    document.write(mensagem + "<br>");
}

let num1 = parseFloat(prompt("Primeiro número:"));

let num2 = parseFloat(prompt("Segundo número:"));

if (num1 === num2) {
    mostraResultado("Os números são iguais!");
} else if (num1 > num2) {
    mostraResultado("O primeiro é maior!");
} else {
    mostraResultado("O segundo é maior!");
}