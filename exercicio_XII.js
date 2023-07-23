let dataAtual = new Date().getFullYear();

let datadeNascimento = parseInt(prompt("Em que ano você nasceu?"));

let idade = dataAtual - datadeNascimento;

if (idade >= 16) {
 document.write("Poderá votar esse ano!");
}
else {
 document.write("Você aindá não poderá votar.");
}