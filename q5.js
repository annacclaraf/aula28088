
let temp;
let febre;
let i;

i = 0;
febre = 0;
while (i < n) {
  temp = Number(prompt("Digite a temperatura da pessoa:" + (i + 1) + ));
  if (temp > 38) {
    febre++;
  }
  i++;
}
console.log("Pessoas com febre: " + febre);