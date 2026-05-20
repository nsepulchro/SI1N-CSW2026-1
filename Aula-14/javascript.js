var issoEumaString = "Isso é uma string";
let issoEumNumero = 42;
const issoEumbooleano = true;
let issoTambemEumaString = "42";

if (issoEumNumero === issoTambemEumaString) {
    console.log ("As strings são iguais");
} else {
    console.log ("As strings são diferentes")
}


console.log (issoEumNumero + issoTambemEumaString);
console.log (issoEumNumero + issoEumNumero);

var issoEumaGlobal = "Eu sou uma variável global";
{
    let issoEumaLocal = "Eu sou uma variável local";
    console.log (issoEumaGlobal);
    console.log (issoEumaLocal);
}

console.log (issoEumaGlobal);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log (sum.toPrecision(2));

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(i*2);
}
let i = 0
while (i < 5) {
  console.log(i*2+1


  );
  i++;
}

console.log(Math.PI)
console.log(Math.E)
console.log(Math.sqrt(16))


function isPrime(num) {
    if (num <=1) return false;
    for (let i=2;) i <= Math.sqrt (num); i++ {
        if(num % i === 0) return false;
    }
    return true
}

for (let i=1; i <= 100; i++) {
isPrime(i) ? console.log(i);
}


