const selectTrigger = document.querySelectorAll('[data-select-trigger]')
const selectOptions = document.querySelectorAll('.select__option')

selectTrigger.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const itemAttr = trigger.getAttribute('data-select-trigger')
        const selectDropdown = document.getElementById(itemAttr)
        selectDropdown.classList.toggle('active')
        
        selectOptions.forEach((option) => {
            option.addEventListener('click', () => {
                trigger.textContent = option.textContent
                selectDropdown.classList.remove('active')
            })
        })
    })
})