const weaponCardTemplate = weapon => {
  const { name, image } = weapon;

  return `
    <li class="weapon-card">
      <div class="weapon-image-wrapper">
        <img src="${weapon.image}" alt="${weapon.name}"/>
        <h2 class="weapon-name">${weapon.name}</h2>
      </div>
    </li>`;
};

export default weaponCardTemplate;
