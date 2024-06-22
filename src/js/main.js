import '../scss/style.scss';
import weapons from '../data/weapons.json';
import weaponCardTemplate from './weaponCardTemplate.js';
import weaponContentTemplate from './weaponContentTemplate.js';
import { toggleModal } from './modal.js';

const refs = {
  weaponsList: document.querySelector('.weapons-list'),
  modalContent: document.querySelector('.modal-window'),
  inventoryInfo: document.querySelector('.inventory-stats'),
};

const renderWeapons = weapons => {
  const markup = weapons.map(weaponCardTemplate).join('');
  refs.weaponsList.innerHTML = markup;

  const weaponsCount = weapons.length;
  const weaponValue = weapons.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);
  refs.inventoryInfo.innerHTML = `<p>Total: ${weaponsCount}</p><span>/</span><p>Value: ${weaponValue}$</p>`;
};

const handleClickCard = e => {
  if (e.target === e.currentTarget) return;

  const targetElement = e.target.closest('li');

  if (targetElement) {
    const id = targetElement.id;
    const weapon = weapons.find(item => item.id === id);
    const markup = weaponContentTemplate(weapon);

    refs.modalContent.innerHTML = markup;
    toggleModal();
  }
};

refs.weaponsList.addEventListener('click', handleClickCard);
document.addEventListener('DOMContentLoaded', () => renderWeapons(weapons));
