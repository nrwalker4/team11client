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
                document.querySelector('.login-form').style.display = 'none';

                //store username as cookie

                //get cart cookies
                //figure out how tf to convert to 

            }
            else{
                
            }
            console.log(user)
            console.log(password)
            console.log(user.username)
        });
    })
}

function setCookie(cname, cvalue,){
    const d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(item) {
    let name = getCookie(item.Name);
        if (name != "") {
         alert(`Cookie saved for ${item.Name}`);
        } else {
          alert('Cookie not saved')
        }
}