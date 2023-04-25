function handleOnLoad(){
  getData()
}

async function getData(){
  let response = await fetch('http://localhost:5138/api/User')
  let data = await response.json()
  console.log(data)
  return data
}

function login(){
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  getData().then(function(users){
      const result = users.find(user => user.username === username && user.userPassword === password)

      console.log(result)

      if (result.isAdmin = true){

          // Hide the login form and show the manager tab
          document.querySelector('.login-form').style.display = 'none';
          document.querySelector('.manager-tab').style.display = 'block';
          
      }
      
  })
}