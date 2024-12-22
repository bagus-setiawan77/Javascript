const btn = document.getElementById('btn');

function disableDarkMode(){
  document.body.style.backgroundColor = 'white';
}

function enableDarkMode(){
  document.body.style.backgroundColor = "#2b2b2b";
}

btn.addEventListener('click', () => {
  btn.checked !== false ? disableDarkMode() : enableDarkMode();
})