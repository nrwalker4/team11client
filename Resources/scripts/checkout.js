//window.location.href = url

const userURL = 'http://localhost:5138/api/User'
const plantURL = 'http://localhost:5138/api/plant'
const toolURL = 'http://localhost:5138/api/Tool'
const orderURL = 'http://localhost:5138/api/Order'
const oLIURL = 'http://localhost:5138/api/OLI'
const cart = getCart()
const OLIs = []
const postOrderURL = ''

window.addEventListener('DOMContentLoaded', async () => {
    const plants = await getPlants()
    const tools = await getTools()
    const orders =
    makeOLI(plants,tools)
})

function getCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    return cart
}

async function getUsers(){
    let response = await fetch(userURL)
    let data = await response.json()
    console.log(data)
    return data
}

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

async function getOrders(){
    try {
      const response = await fetch(orderURL); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
}

function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
  
    getUsers().then(function(users){
        const result = users.find(user => user.username === username && user.userPassword === password)
  
        console.log(result)
  
        if(result === undefined){
            //display message on screen saying incorrect, clear the fields
            alert('Incorrect username/password. Please try again.')
            clearFields()

        }
        else{
            //save user to local storage
            let userInfo = JSON.stringify({Username: username, Password: password})
            localStorage.setItem('userInfo',userInfo)

            //generate order and add
            let newDate = getOrderDate()
            let order = {
                orderId: -1,
                date: '',
                username: result.username
            }
            handleOrderPost(order)

            //generate OLIs and add
            getOrders().then(function(orders){
                OLIs.forEach(OLI =>{
                    let orderID 
                    if(orders.length > 0)
                    {
                        orderID = orders[orders.length-1].orderId
                    }
                    else{
                        orderID = 1
                    }
                    OLI.orderId = orderID
                    console.log(OLI.orderId)
                    handleOLIPost(OLI)
                })
            })
            //hide login form and redirect to thank you page
            document.querySelector('.login-form').style.display = 'none';
            window.location.href = 'others.html'
        }
    })
}

function makeOLI(plants,tools){
    console.log('inside make')
    cart.forEach(item => {
        console.log(item.Name)
        const plantID = getPlantId(plants,item)
        console.log(plantID)
        const toolID = getToolId(tools,item)
        console.log(toolID)
        const price = getPrice(plants,tools,plantID,toolID)

        let OLI = {
            olId: -1,
            itemQty: item.Quantity,
            unitPrice: price,
            orderId: 1,
            plantId: plantID,
            toolId: toolID
        }
        OLIs.push(OLI)
    })
    console.log(OLIs[0])
}

function getPlantId(plants,item){
    //olid, qty, price, orderid, plantid, toolid
    console.log('inside plantid')
    let test = plants.find(plant => plant.plantName === item.Name)

    if(test === undefined){
        let id = -1
        return id
    }
    else{
        let id = test.plantId
        return id
    }
}

function getPrice(plants,tools,plantID,toolID){
    if(plantID != -1){
        return plants.find(plant => plant.plantId === plantID).price
    }
    else{
        return tools.find(tool => tool.toolId === toolID).price
    }
}

function getToolId(tools,item){
    let test = tools.find(tool => tool.toolName === item.Name)
    if(test === undefined){
        return -1
    }
    else{
        return test.toolId
    }
}

function getOrderId(){

}

async function handleOrderPost(order){
    console.log("inside handle post")
    
    order.date = getOrderDate()

    console.log(order.date)

    console.log(order)

    console.log(order.username)

    await fetch(orderURL, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    // window.location.reload(true)
}

async function handleOLIPost(OLI){
    console.log("inside handle post")

    console.log(OLI)

    await fetch(oLIURL, {
        method: "POST",
        body: JSON.stringify(OLI),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    // window.location.reload(true)
}

function clearFields(){
    document.getElementById('username').innerHTML = ' '
    document.getElementById('password').innerHTML = ' '
}

function resetCart(){
    cart.splice(0,cart.length)
}

function getOrderDate(){
    const dateNow = Date.now()
    const tempDate = new Date(dateNow)
    const newDate = tempDate.toJSON(dateNow)
    console.log(newDate)
    return newDate
}