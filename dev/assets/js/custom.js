const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('show')
    if (nav.classList.contains = 'show') {
        document.body.classList.toggle('overflow-hidden')
    }
})

const servicesGridButtons = document.querySelectorAll('#grid-button')

servicesGridButtons.forEach((item) => {
    const itemAttr = item.getAttribute('data-trigger')
    item.addEventListener('click', () => {
        const info = document.getElementById(itemAttr)
        info.classList.toggle('is-open')
    })    
})

const footerForm = document.querySelector('.footer__newsletter-form')
const footerInput = document.querySelector('#footer-input')
const footerButton = document.querySelector('#footer-button')
const footerMessage = document.querySelector('.footer__newsletter-message')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const footerEmailMessage = {
    empty: 'Please enter your email address.',
    error: 'Please enter a valid email address.',
    valid: 'Thank you! Your email address is valid.'
}

const setMessage = (message, isValid) => {
    footerInput.classList.toggle('valid', isValid)
    footerInput.classList.toggle('error', !isValid)
    footerMessage.classList.toggle('valid', isValid)
    footerMessage.classList.toggle('error', !isValid)
    footerMessage.textContent = message
}

footerButton.addEventListener('click', () => {
    const footerEmailValue = footerInput.value

    if (!footerEmailValue) {
        setMessage(footerEmailMessage.empty, false)
    }

    else if (!regex.test(footerEmailValue)) {
        setMessage(footerEmailMessage.error, false)
    }

    else {
        setMessage(footerEmailMessage.valid, true)
        setTimeout(() => {
            footerForm.submit()      
        }, 1000)
    }
})