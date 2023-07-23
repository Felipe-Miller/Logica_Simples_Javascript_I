// Variables
let parcelatotal = 149.90;
let numeroparcelas = 2;
let valorparcela = parcelatotal / numeroparcelas;

document.write("O valor total da compra foi R$" + parcelatotal.toFixed(2) + "<br><br>");
document.write("Pagamento: " + numeroparcelas + " de R$" + valorparcela.toFixed(2));