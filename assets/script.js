var body = document.querySelector('body');
var darkModeButton = document.getElementById('darkMode')

darkModeButton.onclick = function () {
    body.classList.toggle('dark-mode');
}