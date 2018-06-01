import game from '../gameEngine';
import getRandom from '../utils';

const getGcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
}

const description = 'Find the greatest common divisor of given numbers.';

const getQandA = () => {
  const firstNum = getRandom(1, 20);
  const secondNum = getRandom(1, 20);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGcd(firstNum, secondNum);

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
