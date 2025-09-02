let totalSalarios = 0;
let numeroMembros = parseInt(prompt("Quantos membros da família você deseja inserir os salários?"));

for (let i = 1; i <= numeroMembros; i++) {
    let salario = parseFloat(prompt(`Digite o salário do membro ${i}:`));
    totalSalarios += salario;
}

alert(`A família possui R$ ${totalSalarios(2)}`);
