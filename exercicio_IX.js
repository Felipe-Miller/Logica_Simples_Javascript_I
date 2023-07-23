function mostraResultado(resultado) {
    document.write(resultado + "<br>");
}

let quantidade = parseInt(prompt("Digite a quantidade de maças compradas:"));

let valortotalCompra;
if (quantidade < 12) {
    valortotalCompra = quantidade * 0.30;
} else {
    valortotalCompra = quantidade * 0.25;
}

mostraResultado("O valor total da compra é: R$ " + valortotalCompra.toFixed(2));