const refs = {
  modal: document.querySelector('.modal-wrapper'),
  modalContent: document.querySelector('.modal-window'),
};

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');

  if (!refs.modal.classList.contains('is-hidden')) {
    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';
  } else {
    document.removeEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'auto';
  }
};

const handleKeyPress = e => {
  if (e.code === 'Escape') {
    toggleModal();
  }
};

const closeModal = e => {
  if (e.target === refs.modalContent) return;

  toggleModal();
};

refs.modal.addEventListener('click', closeModal);

export { toggleModal };
