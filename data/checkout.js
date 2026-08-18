let apply = document.getElementById("applyCoupon");
apply.setAttribute("onClick", "applyCouponCode()");

let total = document.getElementById("totalPrice")

let codes = [

    "apply",
    "bob",
    "McCall"
]

let menuItems = [{
    name: "Example",
    menu: "Dinner",
    price: 3.99,
    image: ""
}, {
    name: "BEANS",
    menu: "Lunch",
    price: 8.99,
    image: ""
},
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
}


// Calculations





function start() {
    statesFormOptions();
}

start();