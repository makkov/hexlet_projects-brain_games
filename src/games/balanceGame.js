import game from '../gameBase';
import getRandom from '../utils';

const description = 'Balance the given number.';


const sumNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i < `${num}`.length; i += 1) {
    sum += Number(`${num}`[i]);
  }
  return sum;
};

const getBalance = (num) => {
  let answer = '';
  let sumN = sumNumbers(num);
  for (let i = `${num}`.length; i > 0; i--) {
    let partBalanceNum = Math.floor(sumN / i);
    sumN -= partBalanceNum;
    answer += `${partBalanceNum}`;
  }
  return Number(answer);
};

const getQandA = () => {
  const question = getRandom(1, 1000);
  const answer = getBalance(question);

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
