const modals = document.querySelectorAll('.modal')
const openModal = document.querySelectorAll('[data-trigger-modal]')
const closeButton = document.querySelectorAll('[data-close-modal]')

const toggleModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.classList.toggle('show')
    if(nav.classList.contains('show'))  {
        null
    } else {
        document.body.classList.toggle('overflow-hidden')
    }
}

openModal.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleModal(btn.dataset.triggerModal)
    })    
})

closeButton.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleModal(btn.dataset.closeModal)           
    })    
})

modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleModal(modal.id) 
        }
    })
})