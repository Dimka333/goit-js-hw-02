"use strict"


let inputArray = [];
const askUser = function () {
  let input = prompt("Че как по числам?");
  if (input === null) {
    let summ = 0;
    for (let i = 0; i < inputArray.length; i++) {
      summ = summ + inputArray[i];
    }
    console.log(`Сумма чисел ${summ}`);
    return;
  }
  inputArray.push(Number(input));
  askUser();
};

askUser();




let inputArray = [];
let isComplete = false;
while (!isComplete) {
  let input = prompt("Че как по числам?");
  if (input === null) {
    let summ = 0;
    for (let item of inputArray) {
      summ = summ + item;
    }
    console.log(`Сумма чисел ${summ}`);
    isComplete = true;
  }
  inputArray.push(Number(input));
}

