const menuItems = [
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69
    },
    {
        name: "The Big QP Burger",
        menu: "Lunch",
        price: 14.39
    },
    {
        name: "Triple Dipper",
        menu: "Lunch",
        price: 17.59,
        image: "assets/tD.avif"
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99
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