function isFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return true;
  }

  let nextNumber = a + b;
  while (nextNumber <= num) {
    if (nextNumber === num) {
      return true;
    }

    a = b;
    b = nextNumber;
    nextNumber = a + b;
  }

  return false;
}

const numberToCheck = parseInt(
  prompt(
    "Informe um número para verificar se pertence à sequência de Fibonacci:"
  )
);

if (isFibonacci(numberToCheck)) {
  console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
