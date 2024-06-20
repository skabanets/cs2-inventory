import '../scss/style.scss';
import weapons from './weapons.js';
import weaponCardTemplate from './weaponCardTemplate.js';

const refs = {
  weaponsList: document.querySelector('.weapons-list'),
};

const renderWeapons = weapons => {
  const markup = weapons.map(weaponCardTemplate).join('');
  refs.weaponsList.innerHTML = markup;
};

document.addEventListener('DOMContentLoaded', renderWeapons(weapons));
