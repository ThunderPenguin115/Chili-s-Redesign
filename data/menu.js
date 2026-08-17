const menuItems = [
    {
        name : "Triple Dipper",
        menu : "Lunch",
        price : "17.59",
        image : "assets/tD.avif"
    },
    {
        name : "The Chipper",
        menu : "Lunch",
        price : "13.99",
        image : "assets/tD.avif"
    }
];

const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");

const cards = document.querySelectorAll(".card");

breakfast.addEventListener("click", function(){
    cards.forEach(function(card){
        card.querySelectorAll("h1, p, img, #price").forEach(function(text){
            text.style.visibility = "hidden";
        });
    });
});

dinner.addEventListener("click", function(){
    cards.forEach(function(card){
        card.querySelectorAll("h1, p, img, #price").forEach(function(text){
            text.style.visibility = "hidden";
        });
    });
});

lunch.addEventListener("click", function(){
    cards.forEach(function(card){
        card.querySelectorAll("h1, p, img, #price").forEach(function(text){
            text.style.visibility = "visible";
        });
    });
});