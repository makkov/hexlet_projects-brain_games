import game from '../gameEngine';
import getRandom from '../utils';

const description = 'Balance the given number.';

const sumNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i < `${num}`.length; i += 1) {
    sum += Number(`${num}`[i]);
  }
  return sum;
};

const getBalancedNumber = (num) => {
  let answer = '';
  let localSumNumbers = sumNumbers(num);
  let i = `${num}`.length;
  for (i; i > 0; i--) {
    let partBalanceNum = Math.floor(localSumNumbers / i);
    localSumNumbers -= partBalanceNum;
    answer += `${partBalanceNum}`;
  }
  return Number(answer);
};

const getQandA = () => {
  const question = getRandom(1, 1000);
  const answer = String(getBalancedNumber(question));

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
