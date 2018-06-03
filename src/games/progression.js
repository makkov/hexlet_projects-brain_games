import game from '../gameEngine';
import getRandom from '../utils';

const description = 'What number is missing in this progression?';

const getQandA = () => {
  let question = '';
  const firstMember = getRandom(-10, 10);
  const difference = getRandom(-10, 10);
  const placeNumForQuest = getRandom(0, 9);
  let answer;
  const n = 9;
  for (let i = 0; i <= n; i++) {
    if (i === placeNumForQuest) {
      answer = (firstMember + (difference * (i - 1)));
      question += " ..";
    } else {
      question += ` ${firstMember + (difference * (i - 1))}`;
    }
  }
  question = ((question).slice(1, question.lenght));
  answer = String(answer);


  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
