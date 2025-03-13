// Reference Variables (referencing the DOM / html page)
const petsUlRef = document.querySelector("#pets");

//Data Variables
const pets = ["Cat", "Dog", "Fox", "Mouse", "Snake", "Fish", "Bird"];


for (let i= 0; i< pets.length; i+++){
    const pet = pets[i];
console.log(pet);


petsUlRef,innerHTML += "<li>" + pet + "</li>"
}