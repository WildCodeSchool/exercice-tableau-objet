const buttonAlert = document.querySelector('#btn-alert');

buttonAlert.addEventListener('click', function () {
  alert('coucou');
});

const buttonColor = document.querySelector('#btn-color');
const textColor = document.querySelector('.blue');

buttonColor.addEventListener('click', function () {
  setTimeout(function () {
    textColor.classList.toggle('red');
  }, 3000);
});

const backgroundColorDiv = document.querySelector('#fond');

backgroundColorDiv.addEventListener('mouseover', function () {
  backgroundColorDiv.style.backgroundColor = 'yellow';
});

document.querySelector('#create-title').addEventListener('click', function () {
  let button = document.querySelectorAll('button');
  for (let i = 0; i < button.length; i++) {
    let _section = button[i];
    let h2 = document.createElement('h2');
    h2.innerHTML = 'mon texte h2';
    _section.prepend(h2);
  }
});
