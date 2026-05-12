const formButtons = document.querySelectorAll('[data-form-button]')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formEmailMessages = {
    empty: 'Please enter your email address.',
    error: 'Please enter a valid email address.',
    valid: 'Thank you! Your email address is valid.'
}

const formNameMessages = {
    empty: 'Please enter your name',
    error: 'Please enter a valid name',
    valid: 'Thank you! Your name is valid.'
}

formButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const itemAttr = btn.getAttribute('data-form-button')
        const formEmail = document.querySelector(`[data-form-email="${itemAttr}"]`)
        const formEmailMessage = document.querySelector(`[data-email-message="${itemAttr}"]`)
        const formEmailValue = formEmail.value.trim()
        const formName = document.querySelector(`[data-form-name="${itemAttr}"]`)
        const formNameMessage = document.querySelector(`[data-name-message="${itemAttr}"]`)

        const setMessage = (input, messageEl, message, isValid) => {
            input.classList.toggle('valid', isValid)
            input.classList.toggle('error', !isValid)
            messageEl.classList.toggle('valid', isValid)
            messageEl.classList.toggle('error', !isValid)
            messageEl.textContent = message
        }

        let isEmailValid = true
        let isNameValid = true

        if(formName) {
            const formNameValue = formName.value.trim()

            if(!formNameValue) {
                setMessage(formName, formNameMessage, formNameMessages.empty, false)
                isNameValid = false
            }

            else if (formNameValue.length <= 2) {
                setMessage(formName, formNameMessage, formNameMessages.error, false)
                isNameValid = false
            } 
            
            else {
                setMessage(formName, formNameMessage, formNameMessages.valid, true)               
            }
        }

        if(!formEmailValue) {
            setMessage(formEmail, formEmailMessage, formEmailMessages.empty, false)
            isEmailValid = false
        }

        else if (!regex.test(formEmailValue)) {
            setMessage(formEmail, formEmailMessage, formEmailMessages.error, false)
            isEmailValid = false
        }

        else {
            setMessage(formEmail, formEmailMessage, formEmailMessages.valid, true)
            
            if(formName) {
                if(formName.classList.contains('valid')) {
                    setTimeout(() => {
                        const form = document.querySelector(`[data-form="${itemAttr}"]`)    
                        form.submit()
                    }, 1000)
                }
            } else {
                if(isEmailValid && isNameValid) {
                    setTimeout(() => {
                        const form = document.querySelector(`[data-form="${itemAttr}"]`)    
                        form.submit()
                    }, 1000)
                }
            }
        }
    })
})