let apply = document.getElementById("applyCoupon");
apply.setAttribute("onClick", "applyCouponCode()");

let total = document.getElementById("totalPrice")



const coupons = [
    {
        code: "apply",
        discount: 10
    },
    {
        code: "bob",
        discount: 20
    },
    {
        code: "McCall",
        discount: 30
    }
];

const taxRate = 0.08; // 8% tax
const deliveryFee = 5;

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];


let globalCart = [];



// Local Storage



function setCart(){
    console.log(globalCart);

    localStorage.setItem('cartStorage', JSON.stringify(globalCart));
}

function grabCart() {
    const storedCart = JSON.parse(localStorage.getItem("cartStorage"));

    if (storedCart) {
        globalCart = storedCart;
    }

    console.log("Loaded cart:", globalCart);
}

function displayCart() {
    const cartContainer = document.querySelector(".cart");

    cartContainer.innerHTML = "";

    if (globalCart.length === 0) {
        cartContainer.innerHTML = "<h2>Your cart is empty</h2>";
        return;
    }

    globalCart.forEach(function(item) {
        cartContainer.innerHTML += `
            <div class="cart-items">
                <img class="checkoutImage" src="${item.Image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <div class="checkoutItemText">
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        `;
    });
}




grabCart();

// States options
function statesFormOptions(){
    let formSelectStates = document.getElementById("states");
    for(let i = 0; i < states.length; i++){
        let option = document.createElement('option');
        option.innerHTML = states[i];
        option.setAttribute('value', 'states');
        formSelectStates.append(option);
    }
    
}

// Coupon Codes
function applyCouponCode() {
    // console.log("Coupon code applied");

    let pc = document.getElementById("potentialCode").value;
    
    // console.log(pc.value)
    

    for(let i = 0; i < coupons.length; i++) {
        if(pc == coupons[i]) {
            console.log("Coupon Applied");
        }
    }
};

// Add to Cart

function addCart(itemName) {
    console.log("Adding:", itemName);

    // Find the item in menuItems
    const item = menuItems.find(function(menuItem) {
        return menuItem.name === itemName;
    });

    if (!item) {
        console.log("Item not found:", itemName);
        return;
    }

    // Check if item is already in cart
    const existingItem = globalCart.find(function(cartItem) {
        return cartItem.name === itemName;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        globalCart.push({
            name: item.name,
            menu: item.menu,
            price: item.price,
            quantity: 1,
            Image: item.Image,
            description: item.description
        });
    }

    // Save cart so Checkout can access it
    setCart();

    console.log("Cart:", globalCart);
}


// Calculations
function checkoutMath(cart) {
    let subtotal = 0;

    // Add up every item in the cart
    cart.forEach(function(item) {
        subtotal += item.price * item.quantity;
    });

    // Calculate tax
    let tax = subtotal * taxRate;

    // Add delivery fee
    let total = subtotal + tax + deliveryFee;

    // Display the total
    document.getElementById("totalPrice").innerHTML = `
        <div class = "calc">
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p>Delivery: $${deliveryFee.toFixed(2)}</p>
        </div>
        <h2>Total: $${total.toFixed(2)}</h2>
        
    `;

    console.log("Subtotal:", subtotal);
    console.log("Tax:", tax);
    console.log("Delivery:", deliveryFee);
    console.log("Total:", total);
}


function start() {
    grabCart();
    statesFormOptions();
    displayCart();
    checkoutMath(globalCart);
}

start();