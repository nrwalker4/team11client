const url = 'http://localhost:5138/api/User'
//get the users (get)
//if username and pass match, show 
//if not 

let users = getData()

function handleOnLoad(){
    getData()
}
async function getData(){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data
}

function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    getData().then(function(users){
        users.forEach(function(user){
            if(user.username === username && user.userPassword === password)
            {
                console.log(user.email)
                console.log('Yay')
            }
            else{
                console.log('Go fuck yourself')
            }
            console.log(user)
            console.log(password)
            console.log(user.username)
        });
    })
}
