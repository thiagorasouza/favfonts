const customText = document.querySelector('#input-text');
const cardsText = document.querySelectorAll('.card-text');
const selectSize = document.querySelector('#select-size');
const resetBtn = document.querySelector('#btn-reset');
const defaultText = 'The quick brown fox jumps over the lazy dog.';

function reset() {
  cardsText.forEach(cardText => {
    cardText.textContent = defaultText;
    cardText.style = '';
    customText.value = '';
  });
};

reset();

function changeText() {
  let customText = this.value || defaultText;
  cardsText.forEach(cardText => {
    cardText.textContent = customText;
  });
}

function changeSize() {
  let fontSize = parseInt(this.value);
  cardsText.forEach(cardText => {
    cardText.style = `font-size: ${fontSize}px;`;
  });
}

customText.addEventListener('input', changeText);
selectSize.addEventListener('input', changeSize);
resetBtn.addEventListener('click', reset);
