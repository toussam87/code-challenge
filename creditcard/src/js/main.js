var allCards;
var allBills;
var cardSelected;
var section;


var changeCardShown = function() {
    event.preventDefault();
    cardSelected = event.currentTarget.classList.value;
    console.log(cardSelected);


    allBills = document.querySelectorAll(".bill");

    for (var i = 0; i < allBills.length; i++) {
        allBills[i].classList.add("hide");

        }

    showSection = document.getElementById(cardSelected);
    showSection.classList.remove("hide");
}

window.onload = function() {
    allCards = document.querySelectorAll("#card1, #card2, #card3");

    for (var i =0; i < allCards.length; i++) {
        allCards[i].addEventListener("click", changeCardShown, false);
    } 
}

// var onloadSelect = function() {
//     if (listOfCountries.indexOf(userCountry) > -1) {
//         selectedOption = document.querySelector("option[value='" + userCountry + "']")
//     } else {
//         selectedOption = document.querySelector("option[value='INT']");
//     }

//     selectedOption.setAttribute('selected', true);
// }