const menuItems = [
    {
        name: "Waffles",
        menu: "Breakfast",
        price: 15.99,
        quantity: 1,
        Image: "../../assets/waffles.jpg"
    },
    {
        name: "Pancakes",
        menu: "Breakfast",
        price: 13.59,
        quantity: 1,
        Image: "../../assets/pancakes.jpg"
    },
    {
        name: "Crepes",
        menu: "Breakfast",
        price: 14.99,
        quantity: 1,
        Image: "../../assets/crepes.webp"
    },
    {
        name: "French Toast",
        menu: 'Breakfast',
        price: 14.59,
        quantity: 1,
        Image: "../../assets/frenchtoast.jpg"
    },
    {
        name: "Cinnamamon Buns",
        menu: "Breakfast",
        price: 17.99,
        quantity: 1,
        Image: "../../assets/cinnamamonbuns.jpg"
    },
    {
        name: "Bripper",
        menu: "Breakfast",
        price: 25.59,
        quantity: 1,
        Image: "../../assets/bripper.png"
    },
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "The Big QP Burger",
        menu: "Lunch",
        price: 14.39,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Lunch",
        price: 17.59,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Nashville Hot Chicken Crispers Combo",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../../assets/tD.avif"
        },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
        quantity: 1,
        Image: "../../assets/tD.avif"
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
        quantity: 1,
        Image: "../../assets/tD.avif"
    }
];

const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");

const container = document.getElementById("container");

function displayMenu(menu) {
    container.innerHTML = "";
    menuItems.filter(function(item){
        return item.menu === menu;
    }).forEach(function(item){
        container.innerHTML += `
        <div class="card">
            <img src="${item.Image}" alt="${item.name}">
            <h1>${item.name}</h1>
            <p>${item.name} is one of our delicious ${item.menu.toLocaleLowerCase()} options!</p>
            <div id="price">
                <h3> Cost $${item.price}</h3>
                <button>Add To Cart</button>
            </div>
        </div>
        `
    })
}

breakfast.addEventListener("click", function(){
    displayMenu("Breakfast")
})

lunch.addEventListener("click", function(){
    displayMenu("Lunch")
})

dinner.addEventListener("click", function(){
    displayMenu("Dinner")
})