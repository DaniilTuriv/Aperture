const selectTrigger = document.querySelector('.select__trigger')
const selectDropdown = document.querySelector('.select__dropdown')
const selectOptions = document.querySelectorAll('.select__option')

selectTrigger.addEventListener('click', () => {
    selectDropdown.classList.toggle('active')
})

selectOptions.forEach((option) => {
    option.addEventListener('click', () => {
        selectTrigger.textContent = option.textContent
        selectDropdown.classList.remove('active')
    })
})