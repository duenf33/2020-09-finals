// Your code goes below:
const makeParagraph = (input) => {
  return input.join(' ')
}

const totalScore = (score, extra) => {
  let sum = 0;
  for(let i = 0; i < score.length; i++){
    sum += score[i].score;
  }
  return sum;
}

const cipher = (input) => {
  const newInput = input.split('');
  for(let i = 0; i < newInput.length; i++){
    switch(newInput[i]){
      case ' ':
        break;
      case 'z':
        newInput[i] = 'a';
        break;
      default:
        newInput[i] = String.fromCharCode(1 + newInput[i].charCodeAt(0));
    }
  }
  return newInput.join('');
}

const womensAverageSalary = (input) => {
  let sum = 0;
    for(let i = 0; i < input.length; i++){
      sum += input[i].salary / input.length;
    }
    return sum;
  }

const notMarried = () => {

}

const addToMultiDigitNumbers = () => {

}

const Faqtory = (text) => {
  return {
    questions: [],
    text,
    addQuestion() {
      
    },
    answerQuestion() {

    }
  }
}





// Our code goes below... DO NOT TOUCH.


if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
