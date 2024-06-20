const weaponCardTemplate = weapon => {
  const { title, image } = weapon;

  return `
    <li class="weapon-card">
      <div class="weapon-image-wrapper">
        <img src="${weapon.image}" alt="${weapon.title}"/>
        <h2 class="weapon-name">${weapon.title}</h2>
      </div>
    </li>`;
};

export default weaponCardTemplate;
