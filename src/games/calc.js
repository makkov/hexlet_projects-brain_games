import game from '../gameEngine';
import getRandom from '../utils';

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

const operations = [
  {
    sign: '+',
    method: add,
  }, {
    sign: '-',
    method: subtract,
  }, {
    sign: '*',
    method: multiply,
  },
];

const description = 'What is the result of the expression?';

const getQandA = () => {
  const firstNum = getRandom(1, 20);
  const secondNum = getRandom(1, 20);
  const operation = operations[getRandom(0, 2)];
  const question = `${firstNum} ${operation.sign} ${secondNum}`;
  const answer = operation.method(firstNum, secondNum);

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
