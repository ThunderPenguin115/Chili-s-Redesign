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
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
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
<<<<<<< HEAD
        image: "assets/tD.avif",
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
    },
    {
        name: "Nashville Hot Chicken Crispers Combo",
        menu: "Lunch",
        price: 14.79,
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
<<<<<<< HEAD
        quantity: 1
=======
        Image: "../assets/tD.avif"
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
<<<<<<< HEAD
        quantity: 1
    }
=======
        Image: "../assets/tD.avif"
    },
>>>>>>> e2c5ea149ab2f6f9c28cb7dcbf6ac7dd58faba94
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