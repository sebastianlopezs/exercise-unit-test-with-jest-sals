const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY
};

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD
};

function fromYenToPound (yens) {
    return (yens/ oneEuroIs.JPY) * oneEuroIs.GBP
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};