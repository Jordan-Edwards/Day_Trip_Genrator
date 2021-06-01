"use strict";

function destination(){

    let locationArr = ["Mississippi", "Ney York", "Florida", "Texas", "Nevada"];
    let randomLocation = locationArr[Math.floor(Math.random()*locationArr.length)];
        return randomLocation;
}

function restaurant(){

    let restaurantArr = ["Rasin Canes", "Taco Bell", "Wendy's", "Burger King", "Arby's"];
    let randomRestaurant = restaurantArray[Math.floor(Math.random()*restaurantArr.length)];
        return randomRestaurant;
}


function transporation(){

    let transporationArr = ["Car", "Plane", "Bluehound"];
    let randomTransportation = transporationArr[Math.floor(Math.random()*transporationArr.length)];
        return randomTransportation;
}


function entertainment(){

    let entertainmentArr = ["Hiking", "Mall", "City Tour", "Museum", "Casino"];
    let randomEntertainment = entertainmentArr[Math.floor(Math.random()*entertainmentArr.length)];
        return randomEntertainment;
}


function userValue() {
    let choice = parseInt(prompt("Please enter 0 if you are happy with your trip! Enter 1 to change destination, 2 for restaurant, 3 for transportation, or 4 for entertainment. Please press 5 for an entire new trip!"));
        return choice
}


function userTrip(){
    alert("Your randomly generated day trip will be in " + tripDestination + ", you'll eat at " + tripRestaurant + ", you'll arrive by " + tripTransporation + ", and you will go to a " + tripEntertainment + ".");
}


let dayTripArr = [destination(), restaurant(), transportation(), entertainment()];
let tripDestination = dayTripArr[0];
let tripRestaurant = dayTripArr[1];
let tripTransporation = dayTripArr[2];
let tripEntertainment = dayTripArr[3];



function reroll() {
    tripDestination = destination();
    tripRestaurant = restaurant();
    tripTransporation = transportation();
    tripEntertainment = entertainment();
    return tripDestination, tripRestaurant, tripTransporation, tripEntertainment;
}
