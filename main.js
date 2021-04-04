async function showUsers() {
    try {
        const res = await fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq", {});
        return await res.json();
    } catch (reject) {
        return "Server Problem";
    }
}
function getUserPage(userId) {
    window.location.replace(`user.html?id=${userId}`)
}



let result = [];
 async function getShowUsers() {
    form.style.display = 'none'
    tableDiv.style.display='none'
    mainDiv.style.display='grid'

    try {
        result = await showUsers();
        console.log(result);
        result.forEach(usersItem => {
            mainDiv.innerHTML +=
                `<div id=card${usersItem.index} class="card" onclick="getUserPage('${usersItem._id}')">
                 <img src=${usersItem.picture}>
                 <h1>${usersItem.name.first} ${usersItem.name.last}</h1>
                 <p class="title">Email:${usersItem.email}<br> Age:${usersItem.age}</p>
                 <p>${usersItem.phone}</p>
                 <p><button class=button id=btn${usersItem.index} >Contact</button></p>
                 </div>`

        });
    }
    catch (rej) {
        mainDiv.innerHTML += rej;
    }
    finally {

    }
}
getShowUsers();


function showUserDetails() {
    alert("hi")
}

async function tableUsers() {
    mainDiv.style.display = 'none';
    form.style.display = 'none';
    tableDiv.style.display='block';
    try {
        result = await showUsers();
        console.log(result);
        mainDiv.style.gridTemplateAreas = 'table'
        result.forEach(usersItem => {
            tableDiv.innerHTML +=
                `<table width:200px height:100px>
                 <tr>
                   <th>User Name</th>
                   <th>User Last Name</th> 
                   <th>Age</th>
                   <th>Email</th>
                   <th>Phone</th>
                 </tr>
                 <tr>
                   <td>${usersItem.name.first}</td>
                   <td>${usersItem.name.last}</td>
                   <td>${usersItem.age}</td>
                   <td>${usersItem.email}</td>
                   <td>${usersItem.phone}</td>
                 </tr>
            
               </table>`

        });
    }
    catch (rej) {
        mainDiv.innerHTML += rej;
    }
    finally {

    }

}
function showForm() {
    mainDiv.innerHTML = '';
    tableDiv.innerHTML = ''
    form.style.display = 'block'


}


class User {
    constructor(fname, lname, email, age, image) {
        this.fName = fname;
        this.lName = lname;
        this.Email = email;
        this.Age = age;
        this.Image = image;
    }
}

function emailValidation(email, validEmail) {
    if (email == validEmail) {
        return true;
    }
    alert("Email dont match")
    return false;

}


function createUser(paramFname, paramLname, paramEmail, paramAge) {

    if (emailValidation() == true) {
        let user = new User(paramFname, paramLname, paramEmail, paramAge)
        console.log(user)
        return user;
    }
    return alert("Validation problem")



}

function sendUser() {
    let data = createUser()

    fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


}
sendBtn.addEventListener("click", sendUser())