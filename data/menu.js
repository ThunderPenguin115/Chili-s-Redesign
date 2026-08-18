const menuItems = [
    {
        name: "Full Rack Of Ribs",
        menu: "Lunch",
        price: 28.39
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
        name: "",
        menu: "Dinner",
        price: 14,
    },
    {
        name: "",
        menu: "Dinner",
        price: 14,
    },
    {
        name: "",
        menu: "Dinner",
        price: 14,
    },
    {
        name: "",
        menu: "Dinner",
        price: 14
    },
    {
        name: "",
        menu: "Dinner",
        price: 14
    },
    {
        name: "",
        menu: "Dinner",
        price: 14
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