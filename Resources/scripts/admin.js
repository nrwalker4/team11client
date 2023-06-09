// const userURL = 'http://localhost:5138/api/User'
// const plantURL = 'http://localhost:5138/api/plant'
// const toolURL = 'http://localhost:5138/api/Tool'

async function handleOnLoad(){
  plantTable()
  toolTable()
  adminTable()
  userTable()
  const OLIs = await getOLIs()
  orderTable(OLIs)
  formTable()
}

function plantTableClick(){
  document.querySelector('.plantTable').style.display = 'block';

  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }

  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function toolTableClick(){
  document.querySelector('.toolTable').style.display = 'block';

  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }
  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function adminTableClick(){
  document.querySelector('.adminTable').style.display = 'block';
  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }
  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function userTableClick(){
  document.querySelector('.userTable').style.display = 'block';
  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }
  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function formTableClick(){
  document.querySelector('.formTable').style.display = 'block';
  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }
  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function orderTableClick(){
  document.querySelector('.orderTable').style.display = 'block';
  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }
  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }
}

function addAdmin(){
  document.querySelector('.admin-add').style.display = 'block';

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }

  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function addPlant(){
  document.querySelector('.plant-add').style.display = 'block';

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }

  if(document.querySelector('.tool-add').style.display = 'block'){
    document.querySelector('.tool-add').style.display = 'none';
  }

  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }

  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

function addTool(){
  document.querySelector('.tool-add').style.display = 'block';

  if(document.querySelector('.plant-add').style.display = 'block'){
    document.querySelector('.plant-add').style.display = 'none';
  }

  if(document.querySelector('.admin-add').style.display = 'block'){
    document.querySelector('.admin-add').style.display = 'none';
  }

  if(document.querySelector('.plantTable').style.display = 'block'){
    document.querySelector('.plantTable').style.display = 'none';
  }

  if(document.querySelector('.toolTable').style.display = 'block'){
    document.querySelector('.toolTable').style.display = 'none';
  }
  if(document.querySelector('.adminTable').style.display = 'block'){
    document.querySelector('.adminTable').style.display = 'none';
  }
  if(document.querySelector('.userTable').style.display = 'block'){
    document.querySelector('.userTable').style.display = 'none';
  }
  if(document.querySelector('.formTable').style.display = 'block'){
    document.querySelector('.formTable').style.display = 'none';
  }
  if(document.querySelector('.orderTable').style.display = 'block'){
    document.querySelector('.orderTable').style.display = 'none';
  }
}

async function getUsers(){
  let response = await fetch('http://localhost:5138/api/User')
  let data = await response.json()
  console.log(data)
  return data
}

async function getPlants(){
  let response = await fetch('http://localhost:5138/api/plant')
  let data = await response.json()
  console.log(data)
  return data
}

async function getTools(){
  let response = await fetch('http://localhost:5138/api/Tool')
  let data = await response.json()
  console.log(data)
  return data
}

async function getOrders(){
  let response = await fetch('http://localhost:5138/api/Order')
  let data = await response.json()
  console.log(data)
  return data
}

async function getOLIs(){
  let response = await fetch('http://localhost:5138/api/OLI')
  let data = await response.json()
  console.log(data)
  return data
}

async function getForms(){
  let response = await fetch('http://localhost:5138/api/Form')
  let data = await response.json()
  console.log(data)
  return data
}


function login(){
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  getUsers().then(function(users){
      const result = users.find(user => user.username === username && user.userPassword === password)

      console.log(result)

      if (result.isAdmin = true){
        // Hide the login form and show the manager tab
        // document.querySelector('.login-form').style.display = 'none';
        // document.querySelector('.manager-page').style.display = 'block';
        window.location.href = "adminpage.html"
      }
      else{
        alert('Invalid Credentials')
      }

  })
}

function plantTable(){
  getPlants().then(function(plants){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Plant Name')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Image')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Description')
    th3.appendChild(text3)
    row.appendChild(th3)

    let th4 = document.createElement('th')
    th4.setAttribute('colspan', '1');
    let text4 = document.createTextNode('Quantity')
    th4.appendChild(text4)
    row.appendChild(th4)

    let th5 = document.createElement('th')
    th5.setAttribute('colspan', '1');
    let text5 = document.createTextNode('Price')
    th5.appendChild(text5)
    row.appendChild(th5)

    let th6 = document.createElement('th')
    th6.setAttribute('colspan', '1');
    let text6 = document.createTextNode(' ')
    th6.appendChild(text6)
    row.appendChild(th6)

    let th7 = document.createElement('th')
    th7.setAttribute('colspan', '1');
    let text7 = document.createTextNode('Actions')
    th7.appendChild(text7)
    row.appendChild(th7)

    //body of table
    let tbody = table.createTBody()
    plants.forEach(function(plant){
        if(plant.deleted === false){
            let dataRow = tbody.insertRow()

            let td = document.createElement('td')
            let text = document.createTextNode(plant.plantName)
            td.appendChild(text)
            dataRow.appendChild(td)

            let td2 = document.createElement('td')
            let image = document.createElement('img')
              image.src = plant.imageLink
              image.alt = plant.plantName
              image.width = 100
              image.height = 100
            td2.appendChild(image)
            dataRow.appendChild(td2)

            let td3 = document.createElement('td')
            let text3 = document.createTextNode(plant.plantDescription)
            td3.appendChild(text3)
            dataRow.appendChild(td3)

            let td4 = document.createElement('td')
            let text4 = document.createTextNode(plant.inStock)
            td4.appendChild(text4)
            dataRow.appendChild(td4)

            let td5 = document.createElement('td')
            let text5 = document.createTextNode(plant.price)
            td5.appendChild(text5)
            dataRow.appendChild(td5)

            //edit button
            let td7 = document.createElement('td')
            let editButton = document.createElement('button')
            editButton.type = 'button'
            editButton.className = 'btn btn-outline-primary'
            editButton.innerHTML = 'Edit Plant'
            editButton.addEventListener('click',function(){
                console.log('inside editButton')
                let updatedPlant = {
                    plantId: plant.plantId,
                    plantName: prompt("Plant Name: ",plant.plantName),
                    plantType: prompt("Plant Type: ", plant.plantType), //pick category
                    lifespan: prompt("Lifespan: ", plant.lifespan),
                    indoorOutdoor: prompt("Indoor/Outdoor: ", plant.indoorOutdoor), //pick one or other
                    sunExposure: prompt("Sun Exposure: ",plant.sunExposure), //pick category
                    soil: prompt("Soil: ",plant.soil), //pick category
                    wateringFreq: prompt("Watering Frequency: ", plant.wateringFreq),
                    externalLink: prompt("External Link: ",plant.externalLink),
                    imageLink: prompt("Image Link: ",plant.imageLink),
                    price: prompt("Price: ", plant.price),
                    plantDescription: prompt("Description: ", plant.plantDescription),
                    inStock: prompt("Quantity: ", plant.inStock),
                    deleted: plant.deleted
                }
                console.log(updatedPlant.plantName)
                handlePlantPut(updatedPlant)
            })
            td7.appendChild(editButton)
            dataRow.appendChild(td7)
            
            //delete button
            let td8 = document.createElement('td') 
            let delButton = document.createElement('button')
            delButton.type = 'button'
            delButton.className = 'btn btn-outline-danger'
            delButton.addEventListener('click',function(){
                console.log('inside delButton')
                let deleteId = plant.plantId
                console.log(deleteId)
                handlePlantDelete(deleteId)
            })
            delButton.innerHTML = 'Delete Plant'
            td8.appendChild(delButton)
            dataRow.appendChild(td8)
        }
    })
    document.getElementById('plantTable').appendChild(table)
})}

function toolTable(){
  getTools().then(function(tools){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Tool Name')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Image')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Description')
    th3.appendChild(text3)
    row.appendChild(th3)

    let th4 = document.createElement('th')
    th4.setAttribute('colspan', '1');
    let text4 = document.createTextNode('Quantity')
    th4.appendChild(text4)
    row.appendChild(th4)

    let th5 = document.createElement('th')
    th5.setAttribute('colspan', '1');
    let text5 = document.createTextNode('Price')
    th5.appendChild(text5)
    row.appendChild(th5)

    let th6 = document.createElement('th')
    th5.setAttribute('colspan', '1');
    let text6 = document.createTextNode(' ')
    th6.appendChild(text6)
    row.appendChild(th6)

    let th7 = document.createElement('th')
    th7.setAttribute('colspan', '1');
    let text7 = document.createTextNode('Actions')
    th7.appendChild(text7)
    row.appendChild(th7)

    //BODY
    let tbody = table.createTBody()
    tools.forEach(function(tool){
        if(tool.deleted === false){
            let dataRow = tbody.insertRow()

            let td = document.createElement('td')
            let text = document.createTextNode(tool.toolName)
            td.appendChild(text)
            dataRow.appendChild(td)

            let td2 = document.createElement('td')
            let image = document.createElement('img')
              image.src = tool.imageLink
              image.alt = tool.toolName
              image.width = 100
              image.height = 100
            td2.appendChild(image)
            dataRow.appendChild(td2)

            let td3 = document.createElement('td')
            let text3 = document.createTextNode(tool.toolDescription)
            td3.appendChild(text3)
            dataRow.appendChild(td3)

            let td4 = document.createElement('td')
            let text4 = document.createTextNode(tool.inStock)
            td4.appendChild(text4)
            dataRow.appendChild(td4)

            let td5 = document.createElement('td')
            let text5 = document.createTextNode(tool.price)
            td5.appendChild(text5)
            dataRow.appendChild(td5)

            //edit button
            let td6 = document.createElement('td')
            let editButton = document.createElement('button')
            editButton.type = 'button'
            editButton.className = 'btn btn-outline-primary'
            editButton.innerHTML = 'Edit Tool'
            editButton.addEventListener('click',function(){
                console.log('inside editButton')
                let updatedTool = {
                    toolId: tool.toolId,
                    toolName: prompt("Tool Name: ",tool.toolName),
                    imageLink: prompt("Image Link: ",tool.imageLink),
                    price: prompt("Price: ", tool.price),
                    toolDescription: prompt("Description: ", tool.toolDescription),
                    inStock: prompt("Quantity: ",tool.inStock),
                    deleted: tool.deleted
                }
                console.log(updatedTool.toolName)
                handleToolPut(updatedTool)
            })
            td6.appendChild(editButton)
            dataRow.appendChild(td6)
            
            //delete button
            let td7 = document.createElement('td') 
            let delButton = document.createElement('button')
            delButton.type = 'button'
            delButton.className = 'btn btn-outline-danger'
            delButton.addEventListener('click',function(){
                console.log('inside delButton')
                let deleteId = tool.toolId
                console.log(deleteId)
                handleToolDelete(deleteId)
            })
            delButton.innerHTML = 'Delete Tool'
            td7.appendChild(delButton)
            dataRow.appendChild(td7)
        }
    })
    document.getElementById('toolTable').appendChild(table)
})}

function adminTable(){
  getUsers().then(function(users){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Admin Name')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Email')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Username')
    th3.appendChild(text3)
    row.appendChild(th3)

    let th5 = document.createElement('th')
    th5.setAttribute('colspan', '1');
    let text5 = document.createTextNode('Actions')
    th5.appendChild(text5)
    row.appendChild(th5)

    //BODY
    let tbody = table.createTBody()
    users.forEach(function(user){
        if(user.deleted === false && user.isAdmin === true){
            let dataRow = tbody.insertRow()

            let td = document.createElement('td')
            let text = document.createTextNode(user.firstName + ' ' + user.lastName)
            td.appendChild(text)
            dataRow.appendChild(td)

            let td2 = document.createElement('td')
            let text2 = document.createTextNode(user.email)
            td2.appendChild(text2)
            dataRow.appendChild(td2)

            let td3 = document.createElement('td')
            let text3 = document.createTextNode(user.username)
            td3.appendChild(text3)
            dataRow.appendChild(td3)

            //delete button
            let td4 = document.createElement('td') 
            let delButton = document.createElement('button')
            delButton.type = 'button'
            delButton.className = 'btn btn-outline-danger'
            delButton.addEventListener('click',function(){
                console.log('inside delButton')
                let updatedAdmin = {
                  username: user.username,
                  userPassword: user.userPassword,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  isAdmin: false,
                  deleted: false
                }
                handleAdminPut(updatedAdmin)
            })
            delButton.innerHTML = 'Remove Admin'
            td4.appendChild(delButton)
            dataRow.appendChild(td4)
        }
    })
    document.getElementById('adminTable').appendChild(table)
})}

function userTable(){
  getUsers().then(function(users){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Name')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Email')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Username')
    th3.appendChild(text3)
    row.appendChild(th3)

    //BODY
    let tbody = table.createTBody()
    users.forEach(function(user){
        if(user.deleted === false ){ //&& user.isAdmin === false
          let dataRow = tbody.insertRow()

          let td = document.createElement('td')
          let text = document.createTextNode(user.firstName + ' ' + user.lastName)
          td.appendChild(text)
          dataRow.appendChild(td)

          let td2 = document.createElement('td')
          let text2 = document.createTextNode(user.email)
          td2.appendChild(text2)
          dataRow.appendChild(td2)

          let td3 = document.createElement('td')
          let text3 = document.createTextNode(user.username)
          td3.appendChild(text3)
          dataRow.appendChild(td3)
        }
    })
    document.getElementById('userTable').appendChild(table)
})}

function formTable(){
  getForms().then(function(forms){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Form ID')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Indoor/Outdoor')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Sun Exposure')
    th3.appendChild(text3)
    row.appendChild(th3)

    let th4 = document.createElement('th')
    th4.setAttribute('colspan', '1');
    let text4 = document.createTextNode('Soil')
    th4.appendChild(text4)
    row.appendChild(th4)

    let th5 = document.createElement('th')
    th5.setAttribute('colspan', '1');
    let text5 = document.createTextNode('Username')
    th5.appendChild(text5)
    row.appendChild(th5)

    //BODY
    let tbody = table.createTBody()
    forms.forEach(function(form){
          let dataRow = tbody.insertRow()

          let td = document.createElement('td')
          let text = document.createTextNode(form.formId)
          td.appendChild(text)
          dataRow.appendChild(td)

          let td2 = document.createElement('td')
          let text2 = document.createTextNode(form.indoorOutdoor)
          td2.appendChild(text2)
          dataRow.appendChild(td2)

          let td3 = document.createElement('td')
          let text3 = document.createTextNode(form.sunExposure)
          td3.appendChild(text3)
          dataRow.appendChild(td3)

          let td4 = document.createElement('td')
          let text4 = document.createTextNode(form.soil)
          td4.appendChild(text4)
          dataRow.appendChild(td4)

          let td5 = document.createElement('td')
          let text5 = document.createTextNode(form.username)
          td5.appendChild(text5)
          dataRow.appendChild(td5)
    })
    document.getElementById('formTable').appendChild(table)
})}

function orderTable(OLIs){
  getOrders().then(function(orders){
    let table = document.createElement('table')

    let thead = table.createTHead()
    thead.className = 'table-light'
    let row = thead.insertRow()

    let th = document.createElement('th')
    th.setAttribute('colspan', '1');
    let text = document.createTextNode('Order ID')
    th.appendChild(text)
    row.appendChild(th)

    let th2 = document.createElement('th')
    th2.setAttribute('colspan', '1');
    let text2 = document.createTextNode('Date')
    th2.appendChild(text2)
    row.appendChild(th2)

    let th3 = document.createElement('th')
    th3.setAttribute('colspan', '1');
    let text3 = document.createTextNode('Username')
    th3.appendChild(text3)
    row.appendChild(th3)

    let th4 = document.createElement('th')
    th4.setAttribute('colspan', '1');
    let text4 = document.createTextNode('Order Total')
    th4.appendChild(text4)
    row.appendChild(th4)

    // let th5 = document.createElement('th')
    // th5.setAttribute('colspan', '1');
    // let text5 = document.createTextNode('Order Details')
    // th5.appendChild(text5)
    // row.appendChild(th5)

    //BODY
    let tbody = table.createTBody()
    orders.forEach(function(order){
        
        let dataRow = tbody.insertRow()

        let td = document.createElement('td')
        let text = document.createTextNode(order.orderId)
        td.appendChild(text)
        dataRow.appendChild(td)

        let td2 = document.createElement('td')
        let d = new Date
        let dateFix = d.toLocaleDateString(order.orderDate)
        let text2 = document.createTextNode(dateFix)
        td2.appendChild(text2)
        dataRow.appendChild(td2)

        let td3 = document.createElement('td')
        let text3 = document.createTextNode(order.username)
        td3.appendChild(text3)
        dataRow.appendChild(td3)

        let td4 = document.createElement('td')
        let total = calcTotal(order,OLIs)
        let text4 = document.createTextNode('$' + total)
        td4.appendChild(text4)
        dataRow.appendChild(td4)

        // let td5 = document.createElement('td')
        // let btn = document.createElement('button')
        //    btn.type = 'button'
        //    btn.innerHTML = 'Order Details'
        //    btn.addEventListener('click',function(){

        //     })
    })
    document.getElementById('orderTable').appendChild(table)
})}

function calcTotal(order,OLIs){
  let total = 0
  OLIs.forEach(OLI=>{
    if(OLI.orderId === order.orderId){
      let value = OLI.itemQty * OLI.unitPrice
      console.log('value is '+ value)
      total += value
    }
    console.log('inside total' + total)
  })
  console.log('outside total' + total)
  return total
}

async function handlePlantPut(plant){
  console.log("inside handle put")

  let plantURL = 'http://localhost:5138/api/plant'

  const putUrl = plantURL + "/" + plant.plantId

  console.log(plant.plantName)

  await fetch(putUrl, {
      method: "PUT",
      body: JSON.stringify(plant),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
  })

  window.location.reload(true)
}

async function handleToolPut(tool){
  console.log("inside handle put")

  let toolURL = 'http://localhost:5138/api/Tool'
  const putUrl = toolURL + "/" + tool.toolId

  console.log(tool.toolName)

  await fetch(putUrl, {
      method: "PUT",
      body: JSON.stringify(tool),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
  })

  window.location.reload(true)
}

async function handlePlantDelete(plantID){
  console.log("inside handle delete")

  let plantUrl = 'http://localhost:5138/api/Plant'
  let deleteUrl = plantUrl + "/" + plantID

  console.log(plantID)

  await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  window.location.reload(true)
}

async function handleToolDelete(toolID){
  console.log("inside handle delete")

  let toolUrl = 'http://localhost:5138/api/Tool'
  let deleteUrl = toolUrl + "/" + toolID

  console.log(toolID)

  await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  window.location.reload(true)
}

async function handleAdminDelete(username){
  console.log("inside handle delete")

  let userURL = 'http://localhost:5138/api/User'
  let deleteUrl = userURL + "/" + username

  console.log(username)

  await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  window.location.reload(true)
}

async function handleAdminPut(admin){
  console.log("inside handle put")

  let userURL = 'http://localhost:5138/api/User'
  let putUrl = userURL + "/" + admin.username

  console.log(admin.username)

  await fetch(putUrl, {
      method: "PUT",
      body: JSON.stringify(admin),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
  })

  // window.location.reload(true)
}


//STILL NEED TO DO THIS

async function handlePlantPost(plant){
  let tempImage = './Resources/images/Marigold.png'
  let tempLink ='https://www.almanac.com/plant/marigolds'

  plant.imageLink = tempImage
  plant.externalLink = tempLink

  console.log(plant)

  console.log(plant.plantName)

  let plantURL = 'http://localhost:5138/api/plant'

  await fetch(plantURL, {
      method: "POST",
      body: JSON.stringify(plant),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  window.location.reload(true)
}

async function handleToolPost(tool){
  console.log("inside handle post")

  let tempImage = './Resources/images/GardeningGlove.png'

  tool.imageLink = tempImage

  console.log(tool)

  let toolURL = 'http://localhost:5138/api/Tool'

  await fetch(toolURL, {
      method: "POST",
      body: JSON.stringify(tool),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  window.location.reload(true)
}

async function handleUserPost(user){
  console.log("inside handle post")

  console.log(user)

  console.log(user.username)

  let userURL = 'http://localhost:5138/api/User'

  await fetch(userURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  window.location.reload(true)
}

function handleAddAdmin(){

  let fName = document.getElementById('aFName').value
  let lName = document.getElementById('aLName').value
  let email = document.getElementById('aEmail').value
  let username = document.getElementById('aUsername').value
  let password = document.getElementById('aPassword').value

  //something to validate they didn't leave anything blank & email is proper format
  //and that username doesn't already exist

  let newAdmin = {
      username: username,
      userPassword: password,
      email: email,
      firstName: fName,
      lastName: lName,
      isAdmin: true,
      deleted: false
  }   

  console.log(newAdmin)

  handleUserPost(newAdmin)
}

function handleAddPlant(){

  let pName = document.getElementById('pName').value
  let pType = document.getElementById('pType').value
  let pLife = document.getElementById('pLife').value
  let pInOut = document.getElementById('pInOut').value
  let pSun = document.getElementById('pSun').value
  let pSoil = document.getElementById('pSoil').value
  let pWater = document.getElementById('pWater').value
  let pPrice = document.getElementById('pPrice').value
  let pDescription = document.getElementById('pDescription').value
  let pStock = document.getElementById('pStock').value

  let newPlant = {
    plantId: -1,
    plantName: pName,
    plantType: pType,
    lifespan: pLife,
    indoorOutdoor: pInOut,
    sunExposure: pSun,
    soil: pSoil,
    wateringFreq: pWater,
    externalLink: '',
    imageLink: '',
    price: pPrice,
    plantDescription: pDescription,
    inStock: pStock,
    deleted: false
  }   

  console.log(newPlant)

  handlePlantPost(newPlant)
}

function handleAddTool(){

  let tName = document.getElementById('tName').value
  let tPrice = document.getElementById('tPrice').value
  let tDescription = document.getElementById('tDescription').value
  let tStock = document.getElementById('tStock').value

  let newTool = {
    toolId: -1,
    toolName: tName,
    inStock: tStock,
    price: tPrice,
    toolDescription: tDescription,
    imageLink: '',
    deleted: false
  }   

  console.log(newTool)

  handleToolPost(newTool)
}


