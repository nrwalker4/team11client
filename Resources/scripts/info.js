//------------------PLANT INFO PAGE-------------------
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

  function renderPlants(plants) {
    console.log(plants);
    const plantsContainer = document.getElementById('info-row'); // Replace with the ID of the container element on your webpage where you want to display the plants
    plantsContainer.innerHTML = '';
  
    plants.forEach((plant) => {
      const plantElement = document.createElement('div');
      plantElement.className = 'info container'; // Added 'container' class to wrap the image and text
      plantElement.innerHTML = `
        <div class="image-wrapper"> 
          <img src="${plant.imageLink}" alt="${plant.plantName}">
        </div>
        <div class="text-wrapper"> 
          <h3>${plant.plantName}</h3>
          <p>${plant.plantDescription}</p>
          <p>Plant Type: ${plant.plantType}</p>
          <p>Indoor/Outdoor: ${plant.indoorOutdoor}</p>
          <a href="${plant.externalLink}" target="_blank">Read More</a>
        </div>
      `;
      plantsContainer.appendChild(plantElement);
    });
  }
  

window.addEventListener('DOMContentLoaded', async () => { // Changed 'load' to 'DOMContentLoaded' event for better performance
    const plants = await fetchPlants();
    renderPlants(plants);
  });