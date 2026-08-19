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

const menuItemsCheckout = [
    {
        name: "Waffles",
        menu: "Breakfast",
        price: 15.99,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Pancakes",
        menu: "Breakfast",
        price: 13.59,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Crepes",
        menu: "Breakfast",
        price: 14.99,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "French Toast",
        menu: 'Breakfast',
        price: 14.59,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Cinnamamon Buns",
        menu: "Breakfast",
        price: 17.99,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Briper",
        menu: "Breakfast",
        price: 25.59,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "The Big QP Burger",
        menu: "Lunch",
        price: 14.39,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Lunch",
        price: 17.59,
        image: "assets/tD.avif",
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Nashville Hot Chicken Crispers Combo",
        menu: "Lunch",
        price: 14.79,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
        quantity: 1,
        Image: "../assets/tD.avif"
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
        quantity: 1,
        Image: "../assets/tD.avif"
    }
        
    
];

const taxRate = 0.08; // 8% tax
const deliveryFee = 3.99;

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

function addCart(name){
    
    console.log("addCart was clicked")

}


// Calculations
function checkoutMath(cart) {
    let subtotal = 0;

    // Calculate each item's total
    for (let i = 0; i < cart.length; i++) {
        let itemTotal = cart[i].price * cart[i].quantity;

        console.log(
            `${cart[i].name}: $${cart[i].price} x ${cart[i].quantity} = $${itemTotal.toFixed(2)}`
        );

        subtotal += itemTotal;
    }

    // Calculate tax
    let tax = subtotal * taxRate;

    // Calculate final total
    let totalPrice = subtotal + tax + deliveryFee;

    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Tax: $${tax.toFixed(2)}`);
    console.log(`Delivery: $${deliveryFee.toFixed(2)}`);
    console.log(`Total: $${totalPrice.toFixed(2)}`);

    // Put total into your HTML
    total.innerHTML = `$${totalPrice.toFixed(2)}`;

    return totalPrice;
}





function start() {
    statesFormOptions();
    checkoutMath(menuItemsCheckout)
    addCart(name)
}

start();