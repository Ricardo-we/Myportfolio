function toggleButtonByWindowWidth(toggleButton, toggleNav) {
    const phoneSize = 550;

    if (window.screen.width <= phoneSize || window.innerWidth <= phoneSize) {
        toggleNav.classList.add('links-container-phone')
        toggleButton.classList.remove('d-none')
        toggleNav.classList.remove('links-container')
    } else {
        toggleNav.classList.remove('links-container-phone');
        toggleButton.classList.add('d-none')
        toggleNav.classList.add('links-container');
    }
}

function progressBar() {
    const progressBar = document.getElementById('progress-bar');

    document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollBottom = scrollTop + (scrollTop / 2);
        let totalScrollHeight = document.documentElement.scrollHeight;
        let scrollPorcentage = Math.round((scrollBottom / totalScrollHeight) * 100);
        if (scrollPorcentage >= 99) {
            scrollPorcentage = 98.5;
        }
        progressBar.style.width = scrollPorcentage + "%";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const showLinksBtn = document.getElementById('button-display-links');
    const linksContainer = document.getElementById('home-links');

    progressBar();
    toggleButtonByWindowWidth(showLinksBtn, linksContainer);

    showLinksBtn.addEventListener('click', () => linksContainer.classList.add('links-container-phone-open'));
    linksContainer.addEventListener('click', () => linksContainer.classList.remove('links-container-phone-open'))
    window.onresize = () => {
        toggleButtonByWindowWidth(showLinksBtn, linksContainer);
    }
})