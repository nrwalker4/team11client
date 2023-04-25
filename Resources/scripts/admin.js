async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:5138/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ username, password,  })   //add filler data so that you can passs a complete user object to the API as it is expecting in the post
        //
          body: {
          username: username,
          userPassword: password,
          email: '',
          firstName: '',
          lastName: '',
          isAdmin: false,
          deleted: false
        }
      });
      

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        const isAdmin = data.isAdmin;
  
        // Store the token and isAdmin status in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('isAdmin', isAdmin);
  
        if (isAdmin) {
          // Hide the login form and show the manager tab
          document.querySelector('.login-form').style.display = 'none';
          document.querySelector('.manager-tab').style.display = 'block';
  
          // Query the database for the manager information using the username
          const managerQueryResponse = await fetch(`http://localhost:5138/api/user/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const managerInfo = await managerQueryResponse.json();


        
  
          // Fetch the image path from the MySQL database for each plant
        //   const plants = managerInfo.plants;
        //   for (const plant of plants) {
        //     try {
        //       const imagePathResponse = await fetch(`http://localhost:5138/api/plant/${plant.plantID}/${plant.imageLink}`, {
        //         headers: {
        //           Authorization: `Bearer ${token}`
        //         }
        //       });
        //       if (!imagePathResponse.ok) {
        //         throw new Error('Failed to fetch image path');
        //       }
        //       const imagePath = await imagePathResponse.text();
        //       plant.imageLink = imagePath;
        //     } catch (error) {
        //       console.error(error);
        //       // Handle error fetching image path
        //     }
          

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
                <p>$${plant.price}</p>
                <button onclick='addToCart(${plant})'>Add to Cart</button>
              `;
              plantsContainer.appendChild(plantElement);
            });
          }
  
          // Display the manager information on the page
          const managerTab = document.querySelector('.manager-tab');
          const managerInfoHTML = `
            <h2>Welcome ${managerInfo.name}</h2>
            <p>Email: ${managerInfo.email}</p>
          `;
          managerTab.innerHTML = managerInfoHTML;
  
          // Show the manager page
          document.getElementById('manager-page').style.display = 'block';
        } else {
          console.error('User is not a manager');
        }
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
}