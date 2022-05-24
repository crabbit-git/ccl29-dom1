document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');

  const redText = document.createElement('p');
  redText.setAttribute('id', 'red');
  redText.textContent = 'Hey, I\'m red!';
  container.appendChild(redText);

  const blueSubheading = document.createElement('h3');
  blueSubheading.setAttribute('id', 'blue');
  blueSubheading.textContent = 'I\'m a blue h3!';
  container.appendChild(blueSubheading);

  const pinkDiv = document.createElement('div');
  pinkDiv.classList.add('pink-div');
  container.appendChild(pinkDiv);
  const pinkDivHeader = document.createElement('h1');
  pinkDivHeader.classList.add('inside-div');
  pinkDivHeader.textContent = 'I\'m in a div!';
  pinkDiv.appendChild(pinkDivHeader);
  pinkDivText = document.createElement('p');
  pinkDivText.classList.add('inside-div');
  pinkDivText.textContent = 'Me too!';
  pinkDiv.appendChild(pinkDivText);
});
