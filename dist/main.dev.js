"use strict";

console.log('Load script');
var fullName = document.querySelector('div[data-fullname]');
var cardNumber = document.querySelector('div[data-card-number]');
var cardMonth = document.querySelector('div[data-month]');
var cardYear = document.querySelector('div[data-year]');
var cardCvc = document.querySelector('div[data-cvc]');
var inputFields = document.querySelectorAll('.js-input');
inputFields.forEach(function (item) {
  item.addEventListener('keyup', function (e) {
    var dataInput = e.target.dataset.input;
    document.querySelector("div[data-".concat(dataInput, "]")).textContent = e.target.value;
  });
});