//declaraçao de variaveis e entrada de dados 
let idade = Number(prompt("digite sua idade"));
let estudante = prompt("é estudante? (sim ou nao)");
let professor = prompt("é professor?(sim ou nao)");
//condiçao com OU
if (idade >= 60 || estudante === "sim" || professor === "sim") {
        alert("tem direito ao desconto");
} else {
        alert("nao tem direito ao desconto");
}