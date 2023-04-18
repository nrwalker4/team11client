// plants.js

// Function to fetch plant data from the database
async function fetchPlants() {
  try {
    const response = await fetch('/api/plants'); // Replace with your API endpoint for fetching plant data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plants:', error);
  }
}

// Function to render plants on the webpage
function renderPlants(plants) {
  const plantsContainer = document.getElementById('plants-container'); // Replace with the ID of the container element on your webpage where you want to display the plants
  plantsContainer.innerHTML = '';

  plants.forEach(plant => {
    const plantElement = document.createElement('div');
    plantElement.className = 'plant';
    plantElement.innerHTML = `
      <img src="${plant.imageUrl}" alt="${plant.name}">
      <h3>${plant.name}</h3>
      <p>${plant.price}</p>
      <button onclick="addToCart(${plant.id})">Add to Cart</button>
    `;
    plantsContainer.appendChild(plantElement);
  });
}

// Function to add a plant to the cart
function addToCart(plantId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const plant = { id: plantId, quantity: 1 };

  // Check if plant already exists in cart
  const existingPlant = cart.find(item => item.id === plantId);
  if (existingPlant) {
    existingPlant.quantity += 1;
  } else {
    cart.push(plant);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartTab();
}

// Function to update the cart tab
function updateCartTab() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartTab = document.getElementById('cart-tab'); // Replace with the ID of the cart tab element on your webpage

  // Update cart tab display
  if (cart.length > 0) {
    cartTab.textContent = `Cart (${cart.length})`;
  } else {
    cartTab.textContent = 'Cart';
  }
}

// Fetch plants data and render on webpage on page load
window.addEventListener('DOMContentLoaded', async () => { // Changed 'load' to 'DOMContentLoaded' event for better performance
  const plants = await fetchPlants();
  renderPlants(plants);
  updateCartTab();
});
