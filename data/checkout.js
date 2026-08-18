let apply = document.getElementById("applyCoupon");
apply.setAttribute("onClick", "applyCouponCode()");

let total = document.getElementById("totalPrice")

let codes = [

    "apply",
    "bob",
    "McCall"
]

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
    }
]

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

checkoutMath(menuItems[0]);




function start() {
    statesFormOptions();
}

start();