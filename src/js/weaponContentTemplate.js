const weaponContentTemplate = weapon => {
  const { name, exterior, price, description, collection, image } = weapon;

  return `
        <img src="${image}" alt="${name}"/>
        <h2>${name}</h2>
        <p>${exterior}</p>
        <p>${price}</p>
        <p>${description}</p>
        <p>${collection}</p>`;
};

export default weaponContentTemplate;
