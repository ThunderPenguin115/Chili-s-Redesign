let apply = document.getElementById("applyCoupon");
apply.setAttribute("onClick", "applyCouponCode()");

let total = document.getElementById("totalPrice")

let codes = [

    "apply",
    "bob",
    "McCall"
]

const menuItemsCheckout = [
    {
        name: "Honey-Chipotle Chicken Crispers Combo",
        menu: "Lunch",
        price: 17.69,
        quantity: 1
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
        image: "assets/tD.avif",
        quantity: 1
    },
    {
        name: "Bone-In Wings",
        menu: "Lunch",
        price: 17.79,
        quantity: 1
    },
    {
        name: "Boneless Wings",
        menu: "Lunch",
        price: 14.79,
        quantity: 1
    },
    {
        name: "The Original Trio",
        menu: "Dinner",
        price: 26.49,
        quantity: 1
    },
    {
        name: "Full Rack Of Ribs",
        menu: "Dinner",
        price: 28.39,
        quantity: 1
    },
    {
        name: "Triple Dipper",
        menu: "Dinner",
        price: 17.59,
        quantity: 1
    },
    {
        name: "Bacon Cheeseburger",
        menu: "Dinner",
        price: 15.59,
        quantity: 1
    },
    {
        name: "Bacon Rancher Burger",
        menu: "Dinner",
        price: 19.89,
        quantity: 1
    },
    {
        name: "Nashville Hot Big Crispy Chicken Sandwich",
        menu: "Dinner",
        price: 15.99,
        quantity: 1
    }
];

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
    

    for(let i = 0; i < codes.length; i++) {
        if(pc == codes[i]) {
            console.log("Coupon Applied");
        }
    }
};


// Calculations
function checkoutMath(obj) {
    console.log(obj.name)
}

checkoutMath(menuItemsCheckout[0]);




function start() {
    statesFormOptions();
}

start();