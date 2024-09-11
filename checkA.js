function CheckLetterA(string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      counter++;
    }
  }

  console.log(`A letra 'a' aparece ${counter} vezes na string.`);
}

let texto = "O pessimismo nunca venceu uma guerra!";
CheckLetterA(texto);
