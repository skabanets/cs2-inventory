import '../scss/style.scss';
import weapons from './weapons.js';
import weaponCardTemplate from './weaponCardTemplate.js';
import { toggleModal } from './modal.js';

const refs = {
  weaponsList: document.querySelector('.weapons-list'),
};

const renderWeapons = weapons => {
  const markup = weapons.map(weaponCardTemplate).join('');
  refs.weaponsList.innerHTML = markup;
};

const handleClickCard = e => {
  if (e.target === e.currentTarget) return;

  if (e.target.closest('li')) {
    toggleModal();
  }
};

refs.weaponsList.addEventListener('click', handleClickCard);
document.addEventListener('DOMContentLoaded', () => renderWeapons(weapons));
