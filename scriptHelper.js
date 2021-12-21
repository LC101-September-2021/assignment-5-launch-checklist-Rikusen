require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {


    document.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (testInput === ""){
        return("empty");
    } else if ( isNaN (testInput)){
        return("Not a Number");
    } else {
        return("Is a Number");
    }
}

function visibility(){
    document.getElementById("faultyItems").style.visibility = "visible"
}

function pilotsReady(name, pilotType){
    document.getElementById(`${pilotType}`).innerHTML = `${name} is ready for takeoff!`
}

function lowFuel(){
    document.getElementById("fuelStatus").innerHTML = `Fuel is too low for launch!`
}

function highCargo(){
    document.getElementById("cargoStatus").innerHTML = `Cargo is too high for launch!`
}

function notReadyHeady(){
    visibility();
    document.getElementById("launchStatus").style.color = "red"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!"
}

function readyHeady(){
    visibility();
    document.getElementById("launchStatus").style.color = "green"
    document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!"
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let h2 = document.getElementById("launchStatus");


    if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility= "visible";
        h2.style.color = "red"; 
        h2.innerHTML = "Shuttle Not Ready for Launch";       
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    
    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "red"; 
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "red"; 
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    
    } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "green"; 
        h2.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return(response.json())
        });

    return planetsReturned
}

function pickPlanet(planets) {
    let randomMis = Math.floor(Math.random() * planets.length);
    return planets[randomMis]

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;