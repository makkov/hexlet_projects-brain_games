import game from './gameBase';
import { getRandom } from '../utils';

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

const operations = [
  {
    text: '+',
    method: add,
  }, {
    text: '-',
    method: subtract,
  }, {
    text: '*',
    method: multiply,
  },
];

const description = 'What is the result of the expression?';

const getQandA = () => {
  const firstNum = getRandom(1, 20);
  const secondNum = getRandom(1, 20);
  const operation = operations[getRandom(0, 2)];
  const question = `${firstNum} ${operation.text} ${secondNum}`;
  const answer = operation.method(firstNum, secondNum);

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
