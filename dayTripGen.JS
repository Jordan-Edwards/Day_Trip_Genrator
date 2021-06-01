"use strict";
//Features: 
//(5 points): As a developer, I want to make at least three commits.
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

//Research JS Random Generator and look out for other useful methods
function destination() {

    let locationArray = ["Mississippi", "Ney York", "Florida", "Texas", "Nevada"];
    let randomLocation = locationArray[Math.floor(Math.random()*locationArray.length)];
    return randomLocation;
}

function restaurant() {

    let restaurantArray = ["Rasin Canes", "Taco Bell", "Wendy's", "Burger King", "Arby's"];
    let randomRestaurant = restaurantArray[Math.floor(Math.random()*restaurantArray.length)];
    return randomRestaurant;
}

function transportation() {

    let transporationArray = ["Car", "Plane", "Bluehound"];
    let randomTransportation = transporationArray[Math.floor(Math.random()*transporationArray.length)];
    return randomTransportation;
}

function entertainment() {

    let entertainmentArray = ["Nature Trail", "Mall", "City Tour", "Museum", "Casino"];
    let randomEntertainment = entertainmentArray[Math.floor(Math.random()*entertainmentArray.length)];
    return randomEntertainment;
}

//Found parseInt() and used it for Final Aproach
let dayTripArray = [destination(), restaurant(), transportation(), entertainment()];
let tripDestination = dayTripArray[0];
let tripRestaurant = dayTripArray[1];
let tripTransporation = dayTripArray[2];
let tripEntertainment = dayTripArray[3];

function reroll() {
    tripDestination = destination();
    tripRestaurant = restaurant();
    tripTransporation = transportation();
    tripEntertainment = entertainment();
    return tripDestination, tripRestaurant, tripTransporation, tripEntertainment;
}
function userTrip(){
    alert("Your trip will be in " + tripDestination + ", you'll eat at " + tripRestaurant + ", you'll arrive by " + tripTransporation + ", and you will go to a " + tripEntertainment + ".");
}

function userValue() {
   let choice = parseInt(prompt("Please enter 0 if you are happy with your trip! Enter 1 to change destination, 2 for restaurant, 3 for transportation, or 4 for entertainment. Please press 5 for an entire new trip!"));
    return choice
}

userTrip();

let userChoice = true

while (userChoice) {
    let userInput = userValue();
    
    if(userInput === 1) {
        tripDestination = destination();
        userTrip();
    }
    else if(userInput === 2) {
        tripRestaurant = restaurant();
        userTrip();
    }
    else if(userInput === 3) {
        tripTransporation = transportation();
        userTrip();
    }
    else if(userInput === 4) {
        tripEntertainment = entertainment();
        userTrip();
    }
    else if (userInput === 5) {
        reroll();
        userTrip();
    }
    else if (userInput === 0) {
        alert("Your day trip is all set!");
        console.log(tripDestination, " ", tripRestaurant, " ", tripTransporation, " ", tripEntertainment);
        userChoice = false;
    }
    else {
        console.log("Wrong Choice.");
    }

}