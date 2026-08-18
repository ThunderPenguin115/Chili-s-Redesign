const menuItems = [
    {
        name: "Waffles",
        menu: "Breakfast",
        price: 15.99,
        Image: "../assets/tD.avif"
    },
    {
        name: "Pancakes",
        menu: "Breakfast",
        price: 13.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Crepes",
        menu: "Breakfast",
        price: 14.99,
        Image: "../assets/tD.avif"
    },
    {
        name: "French Toast",
        menu: 'Breakfast',
        price: 14.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Cinnamamon Buns",
        menu: "Breakfast",
        price: 17.99,
        Image: "../assets/tD.avif"
    },
    {
        name: "Briper",
        menu: "Breakfast",
        price: 25.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69,
        Image: "../assets/tD.avif"
    },
    {
        name: "The Big QP Burger",
        menu: "Lunch",
        price: 14.39,
        Image: "../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Lunch",
        price: 17.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
        Image: "../assets/tD.avif"
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
        Image: "../assets/tD.avif"
    },
    {
        name: "Nashville Hot Chicken Crispers Combo",
        menu: "Lunch",
        price: 14.79,
        Image: "../assets/tD.avif"
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
        Image: "../assets/tD.avif"
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
        Image: "../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
        Image: "../assets/tD.avif"
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
        Image: "../assets/tD.avif"
    },
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