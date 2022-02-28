function scrollButtonControl() {
    const projectsButton = document.getElementById('projects-button');
    const aboutMeButton = document.getElementById('about-me-button');
    projectsButton.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo(0, 900)
    })
    aboutMeButton.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo(0, 1400)
    });

}

function toggleButtonByWindowWidth(toggleButton, toggleNav) {
    let phoneSize = 550;
    if (window.innerWidth < phoneSize) {
        toggleNav.classList.add('d-none');
        toggleNav.classList.remove('links-container')
        toggleNav.classList.add('links-container-phone')
        toggleButton.classList.remove('d-none');
    } else if (window.innerWidth > phoneSize) {
        toggleNav.classList.remove('d-none');
        toggleNav.classList.add('links-container');
        toggleNav.classList.remove('links-container-phone');
        toggleNav.classList.remove('backward-transition');
        toggleNav.classList.remove('forward-transition');
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

        progressBar.style.width = scrollPorcentage + "%";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const transitions = { forward: 'forward-transition', backward: 'backward-transition' }
    const showLinksBtn = document.getElementById('button-display-links');
    const linksContainer = document.getElementById('links-container');
    let isOpen = false;

    toggleButtonByWindowWidth(showLinksBtn, linksContainer);
    scrollButtonControl()
    showLinksBtn.addEventListener('click', () => {
        if (isOpen === false) {
            linksContainer.classList.toggle('d-none');
            linksContainer.classList.add(transitions.forward);
            linksContainer.classList.remove(transitions.backward);
            isOpen = true;
        } else {
            linksContainer.classList.remove(transitions.forward);
            linksContainer.classList.add(transitions.backward);
            setTimeout(() => linksContainer.classList.toggle('d-none'), 400)
            isOpen = false;
        }
    });

    window.onresize = () => {
        toggleButtonByWindowWidth(showLinksBtn, linksContainer);
    }
    progressBar();
})