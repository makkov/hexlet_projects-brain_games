import readlineSync from 'readline-sync';

const countTask = 3;

const startGame = (getQandA, i = 0) => {
  if (i === countTask) return true;

  const { question, answer } = getQandA();
  console.log(`Question: ${question} `);
  const userAnswer = readlineSync.question('Your answer: ');

  if (String(answer) !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }

  console.log('Correct!');
  return startGame(getQandA, i + 1);
};

export default (gameDescription, getQandA) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const isSuccessGame = startGame(getQandA);

  if (isSuccessGame) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
