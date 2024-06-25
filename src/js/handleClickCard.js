import { refs } from './main';
import weapons from '../data/weapons.json';
import { toggleModal } from './modal';

export const handleClickCard = e => {
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
    weaponLink.target = '_blank';
    weaponLink.textContent = 'Inspect in market';
    weaponLink.classList.add('market-link');
    refs.modalContent.appendChild(weaponLink);

    toggleModal();
  }
};
