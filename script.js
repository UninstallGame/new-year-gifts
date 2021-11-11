class NavigationButton {

    buttonOn;
    buttonOff;
    popup;
    isActive = false;

    constructor() {
        this.buttonOff = document.getElementById('navigation-button__off');
        this.buttonOn = document.getElementById('navigation-button__on');
        this.popup = document.getElementById('mobile-popup');
        this.toggle();
    }

    toggle() {
        this.isActive = !this.isActive
        if (this.isActive) {
            this.enable();
            return;
        }
        this.disable()
    }

    enable() {
        this.buttonOn.classList.remove('hide')
        this.buttonOff.classList.add('hide')
        this.popup.classList.add('hide')
    }

    disable() {
        this.buttonOn.classList.add('hide')
        this.buttonOff.classList.remove('hide')
        this.popup.classList.remove('hide')
    }
}


document.addEventListener('scroll', () => {
    console.log('uGame')
})

document.addEventListener('DOMContentLoaded', () => {
    const menu = new NavigationButton();

    document.getElementById('navigation-button').addEventListener('click', () => {
        menu.toggle();
    })
})
