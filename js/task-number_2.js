"use strict"

const calculateEngravingPrice = function (message, pricePerWord) {
    let wordsArray = message.split(' ');
    let wordsCount = wordsArray.length;
    let totalPrice = wordsCount * pricePerWord;
    return totalPrice;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);