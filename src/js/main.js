import '../scss/style.scss';
import weapons from '../data/weapons.json';
import { renderWeapons } from './renderWeapons.js';
import { handleClickCard } from './handleClickCard';

export const refs = {
  weaponsList: document.querySelector('.weapons-list'),
  modalContent: document.querySelector('.modal-content'),
  inventoryInfo: document.querySelector('.inventory-stats'),
};

refs.weaponsList.addEventListener('click', handleClickCard);
document.addEventListener('DOMContentLoaded', () => renderWeapons(weapons));
