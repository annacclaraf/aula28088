let maior = -Infinity;  
let menor = Infinity;   

for (let i = 0; i < 10; i++) {
    let valor = Number(prompt("Digite o valor:"));
    if (valor > maior) {
        maior = valor;
    }
    if (valor < menor) {
        menor = valor;
    }
}

