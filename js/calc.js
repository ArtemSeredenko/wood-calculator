const thickness = document.querySelector('#thickness');
const width = document.querySelector('#width');
const boardLength = document.querySelector('#length');
const quantity = document.querySelector('#quantity');
const price = 8500;
const submitBtn = document.querySelector('.submit-btn');
const totalResult = document.querySelector('.total-result');

submitBtn.addEventListener('click', calculateFunction);

function calculateFunction(e) {
  e.preventDefault();
  let thicknessValue = parseFloat(thickness.value) / 1000;
  let widthValue = parseFloat(width.value) / 1000;
  let lengthValue = parseFloat(boardLength.value) / 1000;
  let quantityValue = parseInt(quantity.value);

  let volumeInCubicMeters = thicknessValue * widthValue * lengthValue;

  let totalPrice = volumeInCubicMeters * quantityValue * price;

  totalResult.textContent = `Общая стоимость: ${totalPrice.toFixed(2)} грн`;
}
