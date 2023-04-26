const plantURL = 'http://localhost:5138/api/plant'
const toolURL = 'http://localhost:5138/api/Tool'

const cart = []

window.addEventListener('DOMContentLoaded', async () => { // Changed 'load' to 'DOMContentLoaded' event for better performance
    const plants = await getPlants();
    const tools = await getTools();
    renderPlants(plants);
    renderTools(tools);
    // updateCartTab();
});

async function getTools(){
    try {
      const response = await fetch(toolURL); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tools:', error);
    }
}

async function getPlants(){
    try {
      const response = await fetch(plantURL); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
}

function renderTools(tools){
    console.log(tools)
    const toolsContainer = document.getElementById('tools-row');
    toolsContainer.innerHTML = '';
  
    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool';

        let image = document.createElement('img')
            image.src = tool.imageLink
            image.alt = tool.toolName
        
        let title = document.createElement('h3')
            title.innerHTML = tool.toolName
        
        let price = document.createElement('p')
            price.innerHTML = '$' + tool.price

        let button = document.createElement('button1')
            button.innerHTML = 'Add to Cart'
            button.addEventListener('click',function(){
                console.log('inside add to cart')
                let check = cart.findIndex(item => item.Name === tool.toolName)
                if(check > -1){
                    cart[check].Quantity ++
                }
                else{
                    let item = {Name: tool.toolName, Price: tool.price, Quantity: 1}
                    cart.push(item)
                }
                
            })
        toolElement.appendChild(image)
        toolElement.appendChild(title)
        toolElement.appendChild(price)
        toolElement.appendChild(button)
        
        toolsContainer.appendChild(toolElement);

        
    })
    let int = cart.length
    console.log(int);
}

function renderPlants(plants){
    console.log(plants)
    const plantsContainer = document.getElementById('plants-row'); // Replace with the ID of the container element on your webpage where you want to display the plants
    plantsContainer.innerHTML = '';
  
    plants.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.className = 'plant';

        let image = document.createElement('img')
            image.src = plant.imageLink
            image.alt = plant.plantName
        
        let title = document.createElement('h3')
            title.innerHTML = plant.plantName
        
        let price = document.createElement('p')
            price.innerHTML = '$' + plant.price

        let button = document.createElement('button1')
            button.innerHTML = 'Add to Cart'
            button.addEventListener('click',function(){
                console.log('inside add to cart')
                let check = cart.findIndex(item => item.Name === plant.plantName)
                if(check > -1){
                    cart[check].Quantity ++
                }
                else{
                    let item = {Name: plant.plantName, Price: plant.price, Quantity: 1}
                    cart.push(item)
                }
                
            })
        plantElement.appendChild(image)
        plantElement.appendChild(title)
        plantElement.appendChild(price)
        plantElement.appendChild(button)
        
        plantsContainer.appendChild(plantElement);
    })
    let int = cart.length
    console.log(int);
}

function clearCart(){
    clearText()
    cart.splice(0,cart.length)
}

function viewCart(){
    clearText()
    const cartElement = document.getElementById('cart-container');
    // cartElement.innerText = '';

    console.log(cart.length)

    if(cart.length>0){
        console.log(cart[0].Name)
        cart.forEach(item => {
            let product = document.createElement('p')
            product.innerHTML = item.Name + ' - Price: $' + item.Price + ' Quantitiy: ' + item.Quantity
            cartElement.appendChild(product)
        })
    }
    else{
        let text = document.createElement('p')
        text.innerHTML = 'No items in your cart'
        cartElement.appendChild(text)
    }
}

function clearText(){
    document.getElementById('cart-container').innerHTML = ''
}

function checkout(){
    saveCart()
    clearCart()
    window.location.href = 'checkout.html'
}

function saveCart(){
    let cartString = JSON.stringify(cart)
    localStorage.setItem('cart',cartString)
}


