let plants = fetchTools()

// Function to fetch plant data from the database
async function fetchTools() {
    try {
      const response = await fetch("http://localhost:5138/api/Tool"); // Replace with your API endpoint for fetching plant data
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
  }

  function renderTools(tools) {
    console.log(tools);
    const toolsContainer = document.getElementById('tool-info-row'); // Replace with the ID of the container element on your webpage where you want to display the plants
    toolsContainer.innerHTML = '';
  
    tools.forEach((tool) => {
      const toolElement = document.createElement('div');
      toolElement.className = 'tool info container'; // Added 'container' class to wrap the image and text
      toolElement.innerHTML = `
        <div class="image-wrapper"> 
          <img src="${tool.imageLink}" alt="${tool.toolName}">
        </div>
        <div class="text-wrapper"> 
          <h3>${tool.toolName}</h3>
          <p>${tool.toolDescription}</p>
      `;
      toolsContainer.appendChild(toolElement);
    });
  }
  

window.addEventListener('DOMContentLoaded', async () => { // Changed 'load' to 'DOMContentLoaded' event for better performance
    const tools = await fetchTools();
    renderTools(tools);
  });