const menuItems = [
    {
        name: "Waffles",
        menu: "Breakfast",
        price: 15.99,
        quantity: 1,
        Image: "../../assets/waffles.jpg",
        description: "Golden, fluffy waffles with crisp edges, topped with fresh berries, powdered sugar, and a drizzle of warm maple syrup. A deliciously cozy breakfast treat! 🧇🍓🍁"
    },
    {
        name: "Pancakes",
        menu: "Breakfast",
        price: 13.59,
        quantity: 1,
        Image: "../../assets/pancakes.jpg",
        description: "Fluffy, golden pancakes stacked high and drizzled with warm, sweet maple syrup. Simple, classic, and delicious. 🥞🍁"
    },
    {
        name: "Crepes",
        menu: "Breakfast",
        price: 14.99,
        quantity: 1,
        Image: "../../assets/crepes.webp",
        description: "Thin, delicate crepes topped with fresh strawberries and blueberries, finished with a sweet drizzle of warm syrup. 🍓🫐🥞"
    },
    {
        name: "French Toast",
        menu: 'Breakfast',
        price: 14.59,
        quantity: 1,
        Image: "../../assets/frenchtoast.jpg",
        description: "Golden, fluffy French toast topped with fresh strawberries and blueberries, finished with a sweet drizzle of warm syrup. 🍓🫐🍞🍁"
    },
    {
        name: "Cinnamamon Buns",
        menu: "Breakfast",
        price: 17.99,
        quantity: 1,
        Image: "../../assets/cinnamamonbuns.jpg",
        description: "Soft, warm cinnamon buns with a sweet cinnamon swirl, topped with creamy frosting. 🍥🤍"
    },
    {
        name: "Bripper",
        menu: "Breakfast",
        price: 25.59,
        quantity: 1,
        Image: "../../assets/bripper.png",
        description: "French Toast sticks, gravy-duncked hash browns, and bacon-cheddar egg rolls."
    },
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69,
        quantity: 1,
        Image: "../../assets/honeychipotlechickencrispers.jpg",
        description: "Crispy, golden chicken crispers tossed in a sweet and smoky honey-chipotle sauce, served with your choice of sides and dipping sauce. 🍯🌶️🍗"
    },
    {
        name: "The Big QP Burger",
        menu: "Lunch",
        price: 14.39,
        quantity: 1,
        Image: "../../assets/thebigqpburger.jpg",
        description: "A juicy, mouthwatering burger stacked with a seasoned beef patty, melty cheese, fresh toppings, and signature sauce, all tucked into a toasted bun. 🍔🧀🥬"
    },
    {
        name: "Triple Dipper",
        menu: "Lunch",
        price: 17.59,
        quantity: 1,
        Image: "../../assets/tD.avif",
        description: "A delicious trio of your favorite appetizers, served hot and crispy with creamy dipping sauces on the side. Perfect for sharing and satisfying every craving. 🍗🧀🥨"
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
        quantity: 1,
        Image: "../../assets/boneinwings.jpg",
        description: "Crispy, juicy bone-in wings tossed in your choice of bold, flavorful sauce, served hot and ready to satisfy every craving. 🍗🔥"
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../../assets/bonelesswings.jpg",
        description: "Tender, crispy boneless wings tossed in your choice of bold, flavorful sauce, served hot with a side of creamy dipping sauce. 🍗🔥"
    },
    {
        name: "Nashville Hot Chicken Crispers Combo",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../../assets/nashvillehotchickencrispers.jpg",
        description: "Crispy, golden chicken crispers tossed in a fiery Nashville hot seasoning, served with your choice of sides and a cool dipping sauce. 🌶️🍗🔥"
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
        quantity: 1,
        Image: "../../assets/theoriginaltrio.jpg",
        description: "A delicious trio of classic favorites, featuring crispy chicken crispers, savory mozzarella sticks, and golden Southwestern egg rolls, served with dipping sauces. 🍗🧀🌯"
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
        quantity: 1,
        Image: "../../assets/fullrackofribs.jpg",
        description: "A full rack of tender, fall-off-the-bone ribs glazed in smoky, savory BBQ sauce and slow-cooked to juicy perfection. 🍖🔥"
    },
    {
        name: "The Stuff",
        menu: "Dinner",
        price: 17.59,
        quantity: 1,
        Image: "../../assets/thestuff.jpg",
        description: "A strange, savory concoction packed with rich spices and an addictive kick. One bite sends a warm rush through your body, leaving you feeling stronger, faster, and ready to take on anything lurking in the darkness. 🔥"
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
        quantity: 1,
        Image: "../../assets/baconburger.jpg",
        description: "A juicy, seasoned beef patty topped with crispy bacon, melted cheddar cheese, fresh lettuce, ripe tomato, and onions, all stacked on a toasted brioche bun."
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
        quantity: 1,
        Image: "../../assets/baconrancherburger.jpg",
        description: "A juicy beef patty topped with crispy bacon, melted cheddar cheese, fresh lettuce, tomato, and creamy ranch, served on a toasted brioche bun for the perfect savory and smoky bite."
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
        quantity: 1,
        Image: "../../assets/nashvillehotbigcrispychickensandwich.jpg",
        description: "Crispy fried chicken tossed in Nashville hot sauce, topped with fresh lettuce, pickles, and creamy ranch, all served on a toasted brioche bun for a spicy, crunchy, and flavorful bite."
    }
];

// InnerHTML loading item 
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
            <p>${item.description}</p>
            <div id="price">
                <h3> Cost $${item.price}</h3>
                <button class="addCart" onclick="addCart('${item.name}')">Add To Cart</button>
            </div>
        </div>
        `
    })
};

breakfast.addEventListener("click", function(){
    displayMenu("Breakfast")
});

lunch.addEventListener("click", function(){
    displayMenu("Lunch")
});

dinner.addEventListener("click", function(){
    displayMenu("Dinner")
});

function displayMenuByTime(){
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 11){
        displayMenu("Breakfast");
    } else if (hour >= 11 && hour < 17){
            displayMenu("Lunch");
    }else{
        displayMenu("Dinner");
    }
};

displayMenuByTime();

function addCart(itemName) {
    let cart = JSON.parse(localStorage.getItem("cartStorage")) || [];

    const menuItem = menuItems.find(function(item) {
        return item.name === itemName;
    });

    if (!menuItem) {
        console.error("Item not found:", itemName);
        return;
    }

    // Check if item is already in cart
    const existingItem = cart.find(function(item) {
        return item.name === itemName;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: menuItem.name,
            price: menuItem.price,
            Image: menuItem.Image,
            quantity: 1
        });
    }

    localStorage.setItem("cartStorage", JSON.stringify(cart));

    console.log("Cart:", cart);

    // Update sidebar
    displaySideCart();
}

function displaySideCart() {
    const sideCart = document.getElementById("side-cart-items");
    const sideTotal = document.getElementById("side-cart-total");

    if (!sideCart) return;

    const cart = JSON.parse(localStorage.getItem("cartStorage")) || [];

    // Clear the sidebar first
    sideCart.innerHTML = "";

    if (cart.length === 0) {
        sideCart.innerHTML = "<p>Your cart is empty.</p>";
        sideTotal.textContent = "Total: $0.00";
        return;
    }

    let total = 0;

    // Add EVERY item
    cart.forEach(function(item) {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        const subtotal = price * quantity;

        total += subtotal;

        sideCart.innerHTML += `
            <div class="side-cart-item">
                <img src="${item.Image}" alt="${item.name}">

                <div class="side-cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Price: $${price.toFixed(2)}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    sideTotal.textContent = `Total: $${total.toFixed(2)}`;
}