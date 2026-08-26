// TN Creative World
// Premium Creator Dashboard
// Created & Developed by Tahir Nazeer


const TN_Dashboard = {

    creator: "Tahir Nazeer",

    title: "Founder & Developer",

    project: "TN Creative World",

    image: "assets/profile.jpg"

};



function loadDashboard(){

    const dashboard =
    document.getElementById("dashboard");


    if(!dashboard) return;


    dashboard.innerHTML = `

    <div class="premium-card">


        <img 
        src="${TN_Dashboard.image}"
        class="dashboard-img">


        <h2>
        ${TN_Dashboard.creator}
        </h2>


        <p>
        ${TN_Dashboard.title}
        </p>


        <hr>


        <h3>
        TN Creative World
        </h3>


        <p>
        Create • Play • Design
        </p>


        <button onclick="showPlayerStatus()">
        My Progress
        </button>


    </div>

    `;

}



function welcomeDashboard(){

    alert(

    "Welcome to TN Creative World\n\n" +

    "Created & Developed by Tahir Nazeer"

    );

}