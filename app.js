document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  const redText = document.createElement('p');
  redText.setAttribute('id', 'red');
  redText.textContent = 'Hey, I\'m red!';
  container.appendChild(redText);
});
