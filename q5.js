let n = Number(prompt("Quantas pessoas?"));
let i = 0;
let Febre = 0;

while (i < n) {
  let temp = Number(prompt(`Temperatura da pessoa ${i + 1}:`));
  if (temp > 38) {
    Febre++;
  }
  i++;
}

console.log("Pessoas com febre:", Febre);





let n = Number(prompt("Quantas pessoas?"));
let i = 0;
let Febre = 0;

do {
  let temp = Number(prompt(`Temperatura da pessoa ${i + 1}:`));
  if (temp > 38) {
    Febre++;
  }
  i++;
} while (i < n);

console.log("Pessoas com febre:", Febre);






let n = Number(prompt("Quantas pessoas?"));
let Febre = 0;

for (let i = 0; i < n; i++) {
  let temp = Number(prompt(`Temperatura da pessoa ${i + 1}:`));
  if (temp > 38) {
    Febre++;
  }
}

console.log("Pessoas com febre:", Febre);
