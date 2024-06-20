const weaponCardTemplate = weapon => {
  const { id, name, image } = weapon;

  return `
    <li class="weapon-card" id="${weapon.id}">
      <div class="weapon-image-wrapper">
        <img src="${weapon.image}" alt="${weapon.name}" class="weapon-image"/>
        <h2 class="weapon-name">${weapon.name}</h2>
      </div>
    </li>`;
};

export default weaponCardTemplate;
