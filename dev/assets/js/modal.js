const modals = document.querySelectorAll('.modal')
const openModal = document.querySelectorAll('[data-trigger-modal]')
const closeButton = document.querySelectorAll('[data-close-modal]')

openModal.forEach(btn => {
    btn.addEventListener('click', () => {
        const itemAttr = btn.getAttribute('data-trigger-modal')
        const modal = document.getElementById(itemAttr)
        modal.classList.toggle('show')
        document.body.classList.toggle('overflow-hidden')           
    })    
})

closeButton.forEach(btn => {
    btn.addEventListener('click', () => {
        const itemAttr = btn.getAttribute('data-close-modal')
        const modal = document.getElementById(itemAttr)
        modal.classList.toggle('show')
        document.body.classList.toggle('overflow-hidden')             
    })    
})

modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('show')
            document.body.classList.toggle('overflow-hidden')   
        }
    })
})