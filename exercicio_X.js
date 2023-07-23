function dadosPessoais(dados) {
    document.write(dados + "<br>");
}

let nome = prompt("Qual o seu nome?");

let idade = parseInt(prompt("Em que ano você nasceu?"));

let dataAtual = new Date().getFullYear();

let datadeNascimento = dataAtual - idade;

dadosPessoais("Nome: " + nome + ", Idade: " + idade + " anos de idade, nascido em " + datadeNascimento + ".");