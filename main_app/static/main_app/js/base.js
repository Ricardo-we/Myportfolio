function scrollButtonControl(toggleNav, isOpen) {
    const projectsButton = document.getElementById('projects-button');
    const aboutMeButton = document.getElementById('about-me-button');
    let phoneSize = 550;

    projectsButton.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo(0, 900)
        if (phoneSize <= 550 && isOpen === true) {
            hidePhoneNavBar(toggleNav)
            isOpen = false
        }
    })
    aboutMeButton.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo(0, 1400)
        if (phoneSize <= 550 && isOpen === true) {
            hidePhoneNavBar(toggleNav)
            isOpen = false
        }
    });
}

function hidePhoneNavBar(navBar) {
    navBar.classList.remove('forward-transition');
    setTimeout(() => navBar.classList.add('d-none'), 400);
    navBar.classList.add('backward-transition');
}

function showNavBar(navBar) {
    navBar.classList.remove('backward-transition');
    navBar.classList.add('forward-transition');
    navBar.classList.remove('d-none')
}

function toggleButtonByWindowWidth(toggleButton, toggleNav) {
    let phoneSize = 550;
    if (window.innerWidth < phoneSize) {
        toggleNav.classList.add('d-none');
        toggleNav.classList.add('links-container-phone')
        toggleNav.classList.remove('links-container')
        toggleButton.classList.remove('d-none');
    } else {
        toggleNav.classList.remove('d-none');
        toggleNav.classList.remove('links-container-phone');
        toggleNav.classList.remove('backward-transition');
        toggleNav.classList.remove('forward-transition');
        toggleNav.classList.add('links-container');
        toggleButton.classList.add('d-none');
    }
}

/// AUN NO ESTA COMPLETA
function progressBar() {
    const progressBar = document.getElementById('progress-bar');

    document.addEventListener('scroll', () => {
        // const scrollBottomDiference = 455;
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
    const linksContainer = document.getElementById('links-container');
    let isOpen = false;

    progressBar();
    toggleButtonByWindowWidth(showLinksBtn, linksContainer);
    scrollButtonControl(linksContainer, isOpen);

    showLinksBtn.addEventListener('click', () => {
        if (isOpen === false) {
            showNavBar(linksContainer);
            isOpen = true;
        } else {
            hidePhoneNavBar(linksContainer)
            isOpen = false;
        }
    });

    window.onresize = () => {
        toggleButtonByWindowWidth(showLinksBtn, linksContainer);
    }
})