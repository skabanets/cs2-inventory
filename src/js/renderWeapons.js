import { refs } from './main.js';

export const renderWeapons = weapons => {
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

  updateInventoryInfo(weapons);
};

const updateInventoryInfo = weapons => {
  const weaponsCount = weapons.length;
  const weaponValue = weapons.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);

  const inventoryInfo = document.createElement('p');
  inventoryInfo.classList.add('inventory-info');
  refs.inventoryInfo.appendChild(inventoryInfo);
  inventoryInfo.textContent = `Total: ${weaponsCount} / Value: ${weaponValue}$`;
};
