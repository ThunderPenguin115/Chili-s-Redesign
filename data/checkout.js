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


let globalCart = [];



// Local Storage





function setCart(){
    console.log(globalCart);

    localStorage.setItem('cartStorage', JSON.stringify(globalCart));
}

function grabCart(){
    let storedMenu = JSON.parse(localStorage.getItem('cartStorage'));

    for (let i =0; i <=1; i++){
    
    }
    
}



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

function addCart(a){
    console.log("addCart was clicked");
    // console.log(menuItems[0].name);
    // console.log(a);
    for (let i=0; i < menuItems.length; i++){
        if(a === menuItems[i].name){
            console.log(menuItems[i]);
        }

    }
}


// Calculations
function checkoutMath(cart) {
    let subtotal = 0;


}


function start() {
    statesFormOptions();
    checkoutMath(menuItems)
    addCart(name)
    cart()
}

start();