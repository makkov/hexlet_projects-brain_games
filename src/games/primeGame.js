import game from '../gameBase';
import getRandom from '../utils';

const description = 'Is this number prime?';

const isSimple = (num) => {
  let countWholeDiv = 1;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      countWholeDiv++;
    }
  }
  return countWholeDiv <= 2 ? 'yes' : 'no';
};

const getQandA = () => {
  const question = getRandom(1, 10);
  const answer = isSimple(question);

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
