let admin;
let name = "Джон";

admin = name;

alert(admin);

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

a = parseInt(a);
b = parseInt(b);

alert(a + b);

for (let i = 2; i <= 10; i += 2) {
  alert(i);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;
do {
  num = prompt("Введите число больше 100:");
} while (num <= 100 && num !== null);

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const n = 10;
let primes = [];
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

alert(primes.join(", "));
