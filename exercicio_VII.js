
const totalEleitores = parseInt(prompt("Digite o número total de votos:"));

const votosemBranco = parseInt(prompt("Digite o número de votos em branco:"));
const votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
const votosConfirmados = parseInt(prompt("Digite o número de votos válidos:"));

const porcentagemBranco = (votosemBranco / totalEleitores) * 100;
const porcentagemNulo = (votosNulos / votosConfirmados) * 100;
const porcentagemConfirmado = (votosConfirmados / totalEleitores) * 100;

console.log(`Votos brancos: ${porcentagemBranco.toFixed(2)}%`);
console.log(`Votos nulos: ${porcentagemNulo.toFixed(2)}%`);
console.log(`Votos confirmados: ${porcentagemConfirmado.toFixed(2)}%`);