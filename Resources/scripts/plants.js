// plants.js

let plants = fetchPlants()

// Function to fetch plant data from the database
async function fetchPlants() {
    try {
      const response = await fetch("http://localhost:5138/api/plant"); // Replace with your API endpoint for fetching plant data
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  }
  
  // Function to render plants on the webpage
  function renderPlants(plants) {
    console.log(plants)
    const plantsContainer = document.getElementById('plants-row'); // Replace with the ID of the container element on your webpage where you want to display the plants
    plantsContainer.innerHTML = '';
  
    plants.forEach(plant => {
      const plantElement = document.createElement('div');
      plantElement.className = 'plant';
      plantElement.innerHTML = `
        <img src="${plant.imageLink}" alt="${plant.plantName}">
        <h3>${plant.plantName}</h3>
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
  
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
  
    cart.forEach(item => {
      const cartElement = document.createElement('div');
      cartElement.className = 'cart-item';
      cartElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartContainer.appendChild(cartElement);
    });
  }
  // Function to calculate total price of items in the cart
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  }
  
  // Function to display total price of items in the cart
  function displayTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = calculateTotalPrice(cart);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${totalPrice}`;
  }
  
  // Function to submit order
  async function submitOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const order = { items: cart };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    };
  
    try {
      const response = await fetch('https://localhost:5138/api/order', options); // Replace with your API endpoint for submitting an order
      const data = await response.json();
      localStorage.removeItem('cart');
      displayCart();
      updateCartTab();
      displayTotalPrice();
      alert(`Order submitted successfully with order ID: ${data.orderId}`);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  }
  
  // Add event listener to submit order button
  const submitOrderButton = document.getElementById('submit-order');
  submitOrderButton.addEventListener('click', submitOrder);
  
  // Fetch plants data and render on webpage on page load
  window.addEventListener('DOMContentLoaded', async () => { // Changed 'load' to 'DOMContentLoaded' event for better performance
    const plant = await fetchPlants();
    renderPlants(plant);
    displayCart();
    updateCartTab();
    displayTotalPrice();
  });
  
  
  