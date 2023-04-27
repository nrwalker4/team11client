let userURL = 'http://localhost:5138/api/User'

function handleOnClick(){

    let fName = document.getElementById('newFName').value
    let lName = document.getElementById('newLName').value
    let email = document.getElementById('newEmail').value
    let username = document.getElementById('newUsername').value
    let password = document.getElementById('newPassword').value

    //something to validate they didn't leave anything blank & email is proper format
    //and that username doesn't already exist

    let newUser = {
        username: username,
        userPassword: password,
        email: email,
        firstName: fName,
        lastName: lName,
        isAdmin: false,
        deleted: false
    }   

    console.log(newUser)

    handleUserPost(newUser)

    document.querySelector('.create-account').style.display = 'none';

    let div = document.createElement('div')
        
    let text = document.createElement('h3')
        text.innerHTML = 'Account Created!'
        div.appendChild(text)
    
    let btn = document.createElement('button')
        btn.type = 'button'
        btn.innerHTML = 'Return to Checkout'
        btn.addEventListener('click',function(){
            window.location.href = './checkout.html'
        })
        div.appendChild(btn)
    document.querySelector('.new-account').appendChild(div)
}

async function handleUserPost(newUser){
    
    console.log("inside handle post")

    console.log(newUser)

    await fetch(userURL, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
}
