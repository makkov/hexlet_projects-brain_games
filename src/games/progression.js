import game from '../gameEngine';
import getRandom from '../utils';

const description = 'What number is missing in this progression?';

const getProgressionAndanswerNumb = () => {
  let questionProgression = '';
  const firstMember = getRandom(-10, 10);
  const difference = getRandom(-10, 10);
  const placeNumForQuest = getRandom(0, 9);
  let answerNumber;
  const n = 9;
  for (let i = 0; i <= n; i++) {
    if (i === placeNumForQuest) {
      answerNumber = (firstMember + (difference * (i - 1)));
      questionProgression += " ..";
    } else {
      questionProgression += ` ${firstMember + (difference * (i - 1))}`;
    }
  }
  questionProgression = ((questionProgression).slice(1, questionProgression.lenght));

  return {
    questionProgression,
    answerNumber,
  };
};

const getQandA = () => {
  const { questionProgression, answerNumber } = getProgressionAndanswerNumb();
  const question = questionProgression;
  const answer = answerNumber;

  return {
    answer,
    question,
  };
};

export default () => game(description, getQandA);
