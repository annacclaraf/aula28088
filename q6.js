let i = 0;
let soma = 0;

let m1, m2, m3, m4, m5;
let n1, n2, n3, n4, n5;

while (i < 5) {
  if (i == 0) {
    m1 = prompt("Matrícula do aluno 1:");
    n1 = Number(prompt("Nota do aluno 1:"));
    soma += n1;
  } else if (i == 1) {
    m2 = prompt("Matrícula do aluno 2:");
    n2 = Number(prompt("Nota do aluno 2:"));
    soma += n2;
  } else if (i == 2) {
    m3 = prompt("Matrícula do aluno 3:");
    n3 = Number(prompt("Nota do aluno 3:"));
    soma += n3;
  } else if (i == 3) {
    m4 = prompt("Matrícula do aluno 4:");
    n4 = Number(prompt("Nota do aluno 4:"));
    soma += n4;
  } else if (i == 4) {
    m5 = prompt("Matrícula do aluno 5:");
    n5 = Number(prompt("Nota do aluno 5:"));
    soma += n5;
  }
  i = i + 1;
}

let media = soma / 5;

console.log("Alunos com nota acima da média (" + media + "):");





let i = 0;
let soma = 0;

let m1, m2, m3, m4, m5;
let n1, n2, n3, n4, n5;

do {
  if (i == 0) {
    m1 = prompt("Matrícula do aluno 1:");
    n1 = Number(prompt("Nota do aluno 1:"));
    soma += n1;
  } else if (i == 1) {
    m2 = prompt("Matrícula do aluno 2:");
    n2 = Number(prompt("Nota do aluno 2:"));
    soma += n2;
  } else if (i == 2) {
    m3 = prompt("Matrícula do aluno 3:");
    n3 = Number(prompt("Nota do aluno 3:"));
    soma += n3;
  } else if (i == 3) {
    m4 = prompt("Matrícula do aluno 4:");
    n4 = Number(prompt("Nota do aluno 4:"));
    soma += n4;
  } else if (i == 4) {
    m5 = prompt("Matrícula do aluno 5:");
    n5 = Number(prompt("Nota do aluno 5:"));
    soma += n5;
  }
  i++;
} while (i < 5);

let media = soma / 5;

console.log("Alunos com nota acima da média (" + media + "):");




let soma = 0;

let m1, m2, m3, m4, m5;
let n1, n2, n3, n4, n5;

for (let i = 0; i < 5; i++) {
  if (i == 0) {
    m1 = prompt("Matrícula do aluno 1:");
    n1 = Number(prompt("Nota do aluno 1:"));
    soma += n1;
  } else if (i == 1) {
    m2 = prompt("Matrícula do aluno 2:");
    n2 = Number(prompt("Nota do aluno 2:"));
    soma += n2;
  } else if (i == 2) {
    m3 = prompt("Matrícula do aluno 3:");
    n3 = Number(prompt("Nota do aluno 3:"));
    soma += n3;
  } else if (i == 3) {
    m4 = prompt("Matrícula do aluno 4:");
    n4 = Number(prompt("Nota do aluno 4:"));
    soma += n4;
  } else if (i == 4) {
    m5 = prompt("Matrícula do aluno 5:");
    n5 = Number(prompt("Nota do aluno 5:"));
    soma += n5;
  }
}

let media = soma / 5;

console.log("Alunos com nota acima da média (" + media + "):");
if (n1 > media) console.log(m1);
if (n2 > media) console.log(m2);
if (n3 > media) console.log(m3);
if (n4 > media) console.log(m4);
if (n5 > media) console.log(m5);

