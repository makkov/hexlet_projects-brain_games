import game from '../gameEngine';
import getRandom from '../utils';

const description = 'Is this number prime?';

const isPrime = (num) => {
  let countWholeDiv = 1;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      countWholeDiv++;
    }
  }
  return countWholeDiv <= 2;
};

const getQandA = () => {
  const question = getRandom(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
