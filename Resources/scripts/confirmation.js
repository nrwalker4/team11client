// const orderID = getOrderID()
const user = getUser()
const OLIs = getOLIs()
let plantURL = 'http://localhost:5138/api/plant'
let toolURL = 'http://localhost:5138/api/Tool'
let orderURL = 'http://localhost:5138/api/Order'

async function handleOnLoad(){
    const plants = await getPlants()
    const tools = await getTools()
    const orders = await getOrders()
    console.log(user)
    console.log(orders)
    matchOLI(orders)
    updateStock(plants,tools,OLIs)
    // 
}

function getUser(){
    let user = localStorage.getItem('userInfo')
    console.log(user)
    return user
}

function getOLIs(){
    let OLIs = JSON.parse(localStorage.getItem('OLIs'))
    return OLIs
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
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
}

function matchOLI(orders){
    console.log(orders[orders.length-1].orderId)
    // if(orders[orders.length-1].username === user)
    // {
    //     let orderID = orders[orders.length-1].orderID
    //     OLIs.forEach(OLI=>{
    //         OLI.orderId = orderID
    //         console.log(OLI)
    //         handleOLIPost(OLI)
    //     })
    // }
    // else{
    //     console.log('fail')
    // }
    // let orderID = orders[orders.length-1].orderID
    OLIs.forEach(OLI=>{
        OLI.orderId = orders[orders.length-1].orderId
        console.log(OLI)
        handleOLIPost(OLI)
    })
}

async function handlePlantPut(plant){
    let putUrl = plantURL + '/' + plant.plantId
    console.log("inside handle post")
    
    console.log(plant)

    await fetch(putUrl, {
        method: "PUT",
        body: JSON.stringify(plant),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    // window.location.reload(true)
}

async function handleToolPut(tool){
    let putUrl = toolURL + '/' + tool.toolId
    console.log("inside handle post")
    
    console.log(tool)

    await fetch(putUrl, {
        method: "PUT",
        body: JSON.stringify(tool),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    // window.location.reload(true)
}

async function handleOLIPost(OLI){
    let oLIURL = 'http://localhost:5138/api/OLI'
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

function updateStock(plants,tools,OLIs){
    OLIs.forEach(OLI => {
        if(OLI.plantId != -1){
           let item = plants.find(plant => plant.plantId === OLI.plantId)
           item.inStock -= OLI.itemQty
           handlePlantPut(item)
        }
        else{
            let item = tools.find(tool => tool.toolId === OLI.toolId)
            item.inStock -= OLI.itemQty
           handleToolPut(item)
        }
    })
    
}

function clearStorage(){
    OLIs.splice(0,OLIs.length)
}
