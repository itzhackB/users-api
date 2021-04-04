
async function showUsers() {
    try {
        const res = await fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq", {});
        return await res.json();
    } catch (reject) {
        return "Server Problem";
    }
}




let result = [];
async function userProfil() {
    try {
        result = await showUsers();
        console.log(result);
        const queryParams = new URLSearchParams(window.location.search);
        const userId = queryParams.get("id");

        result.forEach((usersItem => {
            if (userId == usersItem._id) {
                document.body.innerHTML =
                    `<h1>Profil Page</h1>
                     <div class="card">
                     <h2>First Name:${usersItem.name.first} ${usersItem.name.last}
                     <h2>Email:${usersItem.email}</h2>
                     <h2>Age:${usersItem.age}</h2>
                     <h2>Phone:${usersItem.phone}</h2>
                     </div>
                     <button onclick="backMenu()">Main menu</button>`;
            }
        })

        )
    
    }

    catch (rej) {
        document.body.innerHTML = "Page not found"
    }
    finally {

    }

}

userProfil();

function backMenu() {
    document.body.innerHTML =
        result.forEach(usersItem => {
            document.body.innerHTML +=
                `<div id=card${usersItem.index} class="card" onclick="getUserPage('${usersItem._id}')">
             <img src=${usersItem.picture}>
             <h1>${usersItem.name.first} ${usersItem.name.last}</h1>
             <p class="title">Email:${usersItem.email}<br> Age:${usersItem.age}</p>
             <p>${usersItem.phone}</p>
             <p><button class=button id=btn${usersItem.index} >Contact</button></p>
             </div>`
        }

     )}