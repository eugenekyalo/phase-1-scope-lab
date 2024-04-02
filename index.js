// Declare variable called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// A function that accesses the global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// A function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    // Declares a variable called bestCustomer asigning it 'not bob'
    bestCustomer = 'not bob';
}

// write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    // Changes the value of the global variable bestCustomer to 'maybe bob'.
    bestCustomer = 'maybe bob';
}

// you now then declare a constant  in global scope called leastFavoriteCustomer assign it some initial value.
const leastFavoriteCustomer = 'someone';

//  A function changeLeastFavoriteCustomer() that attempts to change that constant(it will throw an error for trying to reassign it)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new someone';
}

