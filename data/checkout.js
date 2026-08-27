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

    // Remove invalid/undefined cart items
    globalCart = globalCart.filter(function(item) {
        return (
            item &&
            item.name &&
            item.price !== undefined &&
            item.Image &&
            item.quantity > 0
        );
    });

    // Save cart
    setCart();

    if (globalCart.length === 0) {
        cartContainer.innerHTML = "<h2>Your cart is empty</h2>";
        return;
    }

    globalCart.forEach(function(item) {

        const price = Number(item.price);
        const quantity = Number(item.quantity);
        const subtotal = price * quantity;

        cartContainer.innerHTML += `
            <div class="cart-items">
                <img 
                    class="checkoutImage" 
                    src="${item.Image}" 
                    alt="${item.name}"
                >

                <h2>${item.name}</h2>

                <div class="checkoutItemText">
                    <p>Price: $${price.toFixed(2)}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
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
    let code = document.getElementById("potentialCode").value.trim();

    let discount = 0;

    for (let i = 0; i < coupons.length; i++) {
        if (code.toLowerCase() === coupons[i].code.toLowerCase()) {
            discount = coupons[i].discount;
            break;
        }
    }

    if (discount > 0) {
        localStorage.setItem("couponDiscount", discount);
        alert(discount + "% discount applied!");
    } else {
        localStorage.removeItem("couponDiscount");
        alert("Invalid coupon code.");
    }

    checkoutMath(globalCart);
}

// Add to Cart



// Calculations
function checkoutMath(cart) {
    let subtotal = 0;

    cart.forEach(function(item) {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;

        subtotal += price * quantity;
    });

    const discountPercent =
        Number(localStorage.getItem("couponDiscount")) || 0;

    const discountAmount = subtotal * (discountPercent / 100);

    const discountedSubtotal = subtotal - discountAmount;

    const tax = discountedSubtotal * taxRate;

    const total = discountedSubtotal + tax + deliveryFee;

    document.getElementById("totalPrice").innerHTML = `
        <div class="calc">
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>Discount: -$${discountAmount.toFixed(2)}</p>
            <p>Tax: $${tax.toFixed(2)}</p>
            <p>Delivery: $${deliveryFee.toFixed(2)}</p>
        </div>

        <h2>Total: $${total.toFixed(2)}</h2>
    `;
}


function start() {
    grabCart();
    statesFormOptions();
    displayCart();
    checkoutMath(globalCart);
}

start();