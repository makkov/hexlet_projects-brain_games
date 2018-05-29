import readlineSync from 'readline-sync'
import {getRandom, isEven} from './equipment.js'

export const greeting = () => {
  const userName = () => readlineSync.question('May I have your name?: ')
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".')
  var nameGamer = userName()

  const falseOrTrue = (quest, answerOnQuest) => (isEven(quest) ? 'yes' : 'no') === answerOnQuest //function "is that correct?"

  var i = 0
  while (i < 3) {
    const getAnswer = () => readlineSync.question('Your answer: ')
    var num = getRandom(1, 20)
    console.log(`Question:  ${num}`)
    var answer = getAnswer()

    if (falseOrTrue(num, answer) === true) {
      console.log('Correct!');
      i++
    } else {
      console.log(`'${isEven(num) ? 'no' : 'yes'}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'.\n Let's try again, ${nameGamer}!`);
      return
    }
  }
  console.log(`Congratulations, ${nameGamer}!`);
}
