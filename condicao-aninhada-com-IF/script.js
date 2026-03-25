let renda = Number(prompt("declare sua renda"));
// ! simbolo de negação
// isNAN: is not number (verifica se NAO e um numero)
if(!isNaN(RENDA)){
        if (renda >= 3000) {
                let nomeLimpo = prompt("nome limpo? (sim ou nao)");
                if (nomeLimpo === "sim") {
                        alert("Financiamento aprovado");
                } else {
                        alert("nome negativo");
                }
        } else {
                alert("renda insuficiente");
        }
}