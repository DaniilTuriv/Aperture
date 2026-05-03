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

const form = document.querySelector('[data-form]')
const formInput = document.querySelector('[data-form-input]')
const formButton = document.querySelector('[data-form-button]')
const formMessage = document.querySelector('[data-form-message]')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inputEmailMessage = {
    empty: 'Please enter your email address.',
    error: 'Please enter a valid email address.',
    valid: 'Thank you! Your email address is valid.'
}

const setMessage = (message, isValid) => {
    formInput.classList.toggle('valid', isValid)
    formInput.classList.toggle('error', !isValid)
    formMessage.classList.toggle('valid', isValid)
    formMessage.classList.toggle('error', !isValid)
    formMessage.textContent = message
}

formButton.addEventListener('click', () => {
    const formEmailValue = formInput.value

    if (!formEmailValue) {
        setMessage(inputEmailMessage.empty, false)
    }

    else if (!regex.test(formEmailValue)) {
        setMessage(inputEmailMessage.error, false)
    }

    else {
        setMessage(inputEmailMessage.valid, true)
        setTimeout(() => {
            form.submit()      
        }, 1000)
    }
})