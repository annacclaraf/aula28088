let somaIdades = 0;
let contador = 0;

while {
    let idade = Number(prompt("Digite a idade (0 ou menor para encerrar):"));
    if (idade <= 0) {
        break; 
    }
    somaIdades += idade;
    contador++;
}

if (contador > 0) {
    let idadeMedia = somaIdades / contador;
    prompt(`A idade média da população é: {idadeMedia(2)}`);
}
