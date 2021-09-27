function letterGuesser() {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let randoNums = Math.floor(Math.random() * letters.length);

  let userGuess = Number(prompt(`Guess the index of the letter ${letters[randoNums]}`));

  if (letters[userGuess] !== letters[randoNums]) {
    alert(`Incorrect, you have to re-learn the alphabet. The index of ${letters[randoNums]} is ${randoNums}`);
  } else {
    alert("Correct, you are a genius with the alphabet");
  }
}

letterGuesser()