window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    const list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";
    
    form.addEventListener("submit", function(event){   
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
        if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            list.style.visibility = "hidden"; 
            alert("All fields are required!");
            event.preventDefault();
        } 
        if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
            list.style.visibility = "hidden"; 
            alert("Pilot and CoPilot's names should be letters only.");
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden"; 
            alert("Fuel Level and Cargo Mass should be numbers only.");
            event.preventDefault();
        }
        event.preventDefault();
    });
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)
        console.log(planet)
        addDestinationInfo(document.getElementById("missionTarget"), planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
        

    });
    
});