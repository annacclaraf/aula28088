let soma = 0;

for (;;) {
    let numero = Number(prompt("Digite um número (digite 0 para encerrar):"));
    if (numero === 0) {
        break; 
    }
    soma += numero;
}

prompt(`O somatório dos números é: ${soma}`);
