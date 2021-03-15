//Course Assignment - Programming Foundations
//Question 1
var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
};

//Question 2
for (var i = 15; i < 26; i++) {
    if ((i === 17) || (i === 20)) {
        console.log(i);
    };
};

//Question 3
var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];
var lowRating = document.querySelector("ul");
for (var i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5) {
        lowRating.innerHTML += "<li>" + games[i].title + ":" + " " + games[i].rating + "</li>";
    };
};

//Question 4
function whatIDontLike(vocable) {
    var isString = typeof (vocable);
    if (isString !== "string") {
        console.log("Please send in a string");
    } else {
        console.log("I don't like" + " " + vocable);
    };
};
whatIDontLike("giraffes");

//Question 5
function subtraction(number1, number2) {
    var convertNumber1 = parseFloat(number1);
    var convertNumber2 = parseFloat(number2);
    if (isNaN(convertNumber1) || isNaN(convertNumber2)) {
        return "Invalid argument(s)";
    };
    return convertNumber2 - convertNumber1;
};
var deduct = document.querySelector("#subtraction");
deduct.innerHTML = subtraction(4, 8);

//Question 6
var pageButton = document.querySelector(".page");
function changePage() {
    var titleOfPage = document.querySelector("title");
    titleOfPage.innerHTML = "Updated title";
    var body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    var headline1 = document.querySelector("h1");
    headline1.style.color = "green";
    headline1.style.fontFamily = "impact";
    headline1.innerHTML = "<a href=" + "#" + ">" + "Programming Foundations Course Assignment" + "</a>";
    var list = document.querySelector("ul");
    list.style.listStyle = "none";
    list.style.padding = 0;
}
pageButton.onclick = changePage;

//Question 7
var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];
/*var priceButton = document.querySelector(".price");
priceButton.onclick = function () {
    var convertPrice = parseFloat(toys[i].price);
    console.log(convertPrice);
}*/
/*
var priceButton = document.querySelector(".price");
var total = document.querySelector("#total");
var totalPrice = 0;
priceButton.onclick = function () {
    for (i = 0; i <= toys.length; i++) {
        var convertPrice = parseFloat(toys[i].price);
        if (!isNaN(convertPrice)) {
            totalPrice += convertPrice;
        }
    }
    console.log(totalPrice);
    total.innerHTML = totalPrice;
}
*/

var total = document.querySelector("#total");
var priceButton = document.querySelector(".price");
priceButton.onclick = function () {
    var totalPrice = 0;
    var convertPrice = 0;
    for (i = 0; i <= toys.length; i++) {
        convertPrice = parseFloat(toys[i].price);
        if (!isNaN(convertPrice)) {
            totalPrice += convertPrice;
        }
    }
    total.innerHTML = totalPrice;
}