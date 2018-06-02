import game from '../gameEngine';
import getRandom from '../utils';

const description = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const getQandA = () => {
  const question = getRandom(1, 10);
  const answer = String(isPrime(question) ? 'yes' : 'no');

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
