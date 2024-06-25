const refs = {
  modal: document.querySelector('.modal-wrapper'),
  modalContent: document.querySelector('.modal-window'),
  exitBtn: document.querySelector('.button-exit'),
};

export const toggleModal = () => {
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
  e.stopPropagation();

  if (
    e.target === refs.modal ||
    e.target.closest('.button-exit') === refs.exitBtn
  ) {
    toggleModal();
  }
};

refs.modal.addEventListener('click', closeModal);
