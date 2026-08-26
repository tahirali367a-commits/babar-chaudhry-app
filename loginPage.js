// TN Creative World
// Login Page UI
// Created & Developed by Tahir Nazeer

const TN_Login_Page = {

    image: "assets/login-profile.jpg",

    title: "TN Creative World",

    creator: "Tahir Nazeer"

};

function createLoginPage(){

    document.body.innerHTML = `

    <div class="tn-login-page">

        <img
        class="tn-login-photo"
        src="${TN_Login_Page.image}"
        alt="Tahir Nazeer">

        <h1>${TN_Login_Page.title}</h1>

        <h3>Created & Developed by ${TN_Login_Page.creator}</h3>

        <input
        id="playerName"
        type="text"
        placeholder="Enter Your Name">

        <button onclick="playerLogin()">
            Enter Game
        </button>

    </div>

    `;

}

window.onload = createLoginPage;