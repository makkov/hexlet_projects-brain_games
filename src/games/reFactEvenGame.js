import game from './gameBase';
import { getRandom } from '../utils';

const isEven = num => (num % 2) === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQandA = () => {
  const question = getRandom(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
