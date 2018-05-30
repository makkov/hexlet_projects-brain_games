import readlineSync from 'readline-sync';
import { getRandom } from './utils';

const gameEven = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?: ');
  const isEven = number => (number % 2) === 0;
  const isFalseOrTrue = (quest, answerOnQuest) => (isEven(quest) ? 'yes' : 'no') === answerOnQuest;
  const countTask = 3;

  let i = 0;
  while (i < countTask) {
    const getAnswer = () => readlineSync.question('Your answer: ');
    const num = getRandom(1, 20);
    console.log(`Question:  ${num}`);
    const answer = getAnswer();

    if (isFalseOrTrue(num, answer) === true) {
      console.log('Correct!');
      i++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'.\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { gameEven };
