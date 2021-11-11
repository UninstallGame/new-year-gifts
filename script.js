class NavigationButton {

    buttonOn;
    buttonOff;
    popup;
    shadow;
    body
    showed = true;

    constructor() {
        this.buttonOff = document.getElementById('navigation-button__off');
        this.buttonOn = document.getElementById('navigation-button__on');
        this.popup = document.getElementById('mobile-popup');
        this.shadow = document.getElementById('shadow');
        this.body = document.getElementsByTagName('body')[0];
        this.shadow.addEventListener('click', () => {
            this.hide()
        })

        this.toggle();
    }

    toggle() {
        if (this.showed) {
            this.hide()
            return;
        }
        this.show();
    }

    show() {
        this.showed = true;
        this.buttonOn.classList.add('hide')
        this.shadow.classList.remove('hide')
        this.buttonOff.classList.remove('hide')
        this.popup.classList.add('mobile-popup__show')
        this.body.classList.add('overflow-hide')
    }

    hide() {
        this.showed = false;
        this.buttonOn.classList.remove('hide')
        this.shadow.classList.add('hide')
        this.buttonOff.classList.add('hide')
        this.popup.classList.remove('mobile-popup__show')
        this.body.classList.remove('overflow-hide')
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
