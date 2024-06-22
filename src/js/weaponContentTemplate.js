const weaponContentTemplate = weapon => {
  const { name, exterior, price, description, collection, image } = weapon;

  return `
    <img src="${image}" alt="${name}" class='weapon-modal-image'/>
    <div class="weapon-info">
      <h2>${name}</h2>
      <div class='weapon-details'>
        <p>Exterior: ${exterior}</p>
        <p>Price: ${price}$</p>
      </div>
      <p>${description}</p>
    </div>
    <a href="https://example.com" target="_blank" class="market-link">Inspect in market</a>
    `;
};

export default weaponContentTemplate;
