import '../scss/style.scss';
import weapons from '../data/weapons.json';
import { toggleModal } from './modal.js';

const refs = {
  weaponsList: document.querySelector('.weapons-list'),
  modalContent: document.querySelector('.modal-content'),
  inventoryInfo: document.querySelector('.inventory-stats'),
};

const renderWeapons = weapons => {
  weapons.forEach(weapon => {
    const weaponCard = document.createElement('li');
    weaponCard.classList.add('weapon-card');
    weaponCard.setAttribute('id', weapon.id);
    refs.weaponsList.appendChild(weaponCard);

    const weaponWrapper = document.createElement('div');
    weaponWrapper.classList.add('weapon-image-wrapper');
    weaponCard.appendChild(weaponWrapper);

    const weaponImg = document.createElement('img');
    weaponImg.src = weapon.image;
    weaponImg.alt = weapon.name;
    weaponImg.classList.add('weapon-image');
    weaponWrapper.appendChild(weaponImg);

    const weaponTitle = document.createElement('h2');
    weaponTitle.classList.add('weapon-name');
    weaponTitle.textContent = weapon.name;
    weaponWrapper.appendChild(weaponTitle);
  });

  const weaponsCount = weapons.length;
  const weaponValue = weapons.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);

  const inventoryInfo = document.createElement('p');
  inventoryInfo.classList.add('inventory-info');
  refs.inventoryInfo.appendChild(inventoryInfo);
  inventoryInfo.textContent = `Total: ${weaponsCount} / Value: ${weaponValue}$`;
};

const handleClickCard = e => {
  if (e.target === e.currentTarget) return;

  const targetElement = e.target.closest('li');

  if (targetElement) {
    refs.modalContent.innerHTML = '';
    const id = targetElement.id;
    const weapon = weapons.find(item => item.id === id);

    const weaponImage = document.createElement('img');
    weaponImage.src = weapon.image;
    weaponImage.alt = weapon.name;
    weaponImage.classList.add('weapon-modal-image');
    refs.modalContent.appendChild(weaponImage);

    const weaponInfo = document.createElement('div');
    weaponInfo.classList.add('weapon-info');
    refs.modalContent.appendChild(weaponInfo);

    const weaponTitle = document.createElement('h2');
    weaponTitle.textContent = weapon.name;
    weaponInfo.appendChild(weaponTitle);

    const weaponDetails = document.createElement('div');
    weaponDetails.classList.add('weapon-details');
    weaponInfo.appendChild(weaponDetails);

    const weaponExterior = document.createElement('p');
    weaponExterior.textContent = `Exterior: ${weapon.exterior}`;
    weaponDetails.appendChild(weaponExterior);

    const weaponPrice = document.createElement('p');
    weaponPrice.textContent = `Price: ${weapon.price}$`;
    weaponDetails.appendChild(weaponPrice);

    const weaponDescription = document.createElement('p');
    weaponDescription.textContent = weapon.description;
    weaponInfo.appendChild(weaponDescription);

    const weaponLink = document.createElement('a');
    weaponLink.href = weapon.link;
    weaponLink.textContent = 'Inspect in market';
    weaponLink.classList.add('market-link');
    refs.modalContent.appendChild(weaponLink);

    toggleModal();
  }
};

refs.weaponsList.addEventListener('click', handleClickCard);
document.addEventListener('DOMContentLoaded', () => renderWeapons(weapons));
