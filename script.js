const inputText = document.querySelector('#text-input');
const copyButton = document.querySelector('.copy-button');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(inputText.value);
});
