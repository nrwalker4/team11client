// const orderID = getOrderID()
const user = getUser()
const OLIs = getOLIs()
let orderURL = 'http://localhost:5138/api/Order'

async function handleOnLoad(){
    const orders = await getOrders()
    console.log(user)
    console.log(orders)
    matchOLI(orders)
    clearStorage()
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

function clearStorage(){
    OLIs.splice(0,OLIs.length)
}
