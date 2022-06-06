function changeMode() {
  changeClasses();
  changeTexts();
}

function changeClasses() {
  botao.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeTexts() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    if (botao.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode
        h1.innerHTML = `${darkMode} ON`
    } else {
        botao.innerHTML = darkMode
        h1.innerHTML = `${lightMode} ON`
    }
}

const darkModeClass = "dark-mode";
const botao = document.getElementById("botao");
const h1 = document.getElementById("titulo");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

botao.addEventListener("click", changeMode);
