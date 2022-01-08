/* "use strict";

//GET request for 'List User'
axios.get('https://reqres.in/api/users?page=2')
    .then((response) => {
        if (response.status !== 200) {
            console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
            return;
        }
        response.json()
            .then(data => console.log(data));
    })
    .catch(err => console.error(`Fetch Error :-S ${err}`));

//GET request for 'Single User' with the id of 2
axios.get('https://reqres.in/api/users/2')
    .then((response) => {
        if (response.status !== 200) {
            console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
            return;
        }
        response.json()
            .then(data => console.log(data));
    })
    .catch(err => console.error(`Fetch Error :-S ${err}`));

//POST  request for 'Create', name with a value of "Morpheus", job with a value of "Leader"
axios.get("https://reqres.in/api/users", {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: "Morpheus",
            job: "Leader"
        })
    })
    .then(res => res.json())
    .then(data => console.log(`Request succeeded with JSON response ${data}`))
    .catch(error => console.error(`Request failed ${error}`));

//POST request for 'Register - Successful', email with a value of "eve.holt@reqres.inheus", password with a value of "pistol"
axios.get("https://reqres.in/api/register", {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "pistol"
        })
    })
    .then(res => res.json())
    .then(data => console.log(`Request succeeded with JSON response ${data}`))
    .catch(error => console.error(`Request failed ${error}`));

//POST request for 'Login - Successful', email with a value of "eve.holt@reqres.inheus", password with a value of "cityslicka"
axios.get("https://reqres.in/api/login", {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        })
    })
    .then(res => res.json())
    .then(data => console.log(`Request succeeded with JSON response ${data}`))
    .catch(error => console.error(`Request failed ${error}`)); */


"use strict";

const getOutput = document.querySelector("#getOutput");

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const playerName = form.playerName.value;
    axios
        .delete(`http://localhost:8081/duck/deleteDuck/${playerName}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.playerName.focus();
            getPlayers();
        })
        .catch(err => console.error(err));
});

// use anonymous functions not arrow functions for eventListeners
document.querySelector("#playerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // disables page refreshing

    console.log("THIS:", this);

    const form = this; // purely to make it more obvious

    console.log("TEAM NAME: ", form.teamName);

    const data = {
        playerName: form.playerName.value,
        playerNumber: form.playerNumber.value,
        teamName: form.teamName.value,
        tdCelebration: form.tdCelebration.value,
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:3306/Players/createPlayer", data)
        .then(res => {
            getPlayers();
            form.reset(); // resets the form
            form.playerName.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
});

const getPlayers = () => {
    axios
        .get("http://localhost:3306/Players/getAll")
        .then(res => {
            console.log(res);
            const player = res.data;
            getOutput.innerHTML = ""; // blanks the output field
            for (let player of Players) {
                const playerCol = document.createElement("div");
                playerCol.classList.add("col");

                const playerCard = document.createElement("div");
                playerCard.style = `background-color: ${Players.teamName}`;
                playerCard.classList.add("card");

                const playerBody = document.createElement("div");
                playerBody.classList.add("card-body");

                const playerName = document.createElement("h5");
                playerName.classList.add("card-title");
                playerName.innerText = `Player Name: ${Players.playerName}`;
                playerBody.appendChild(playerName);

                const playerNumber = document.createElement("p");
                playerNumber.classList.add("card-text");
                playerNumber.innerText = `Player Number: ${Players.playerNumber}`;
                playerBody.appendChild(playerNumber);

                const teamName = document.createElement("p");
                teamName.classList.add("card-text");
                teamName.innerText = `Colour: ${Players.teamName}`;
                playerBody.appendChild(teamName);

                const tdCelebration = document.createElement("p");
                tdCelebration.classList.add("card-text");
                tdCelebration.innerText = `Touchdown Celebration: ${Players.tdCelebration}`;
                playerBody.appendChild(tdCelebration);

                const playerDelete = document.createElement("button");
                playerDelete.innerText = "DELETE";
                playerDelete.classList.add("btn", "btn-danger");
                playerDelete.addEventListener("click", () => {
                    axios
                        .delete(`http://localhost:3306/Players/deletePlayer/${Players.playerName}`)
                        .then(res => getPlayers())
                        .catch(err => console.error(err))
                });
                playerBody.appendChild(playerDelete);
                playerCard.appendChild(playerBody);
                playerCol.appendChild(playerCard);

                getOutput.appendChild(playerCol);
            }
        })
        .catch(err => console.error(err));
}

getPlayers();