// Get Data
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error")




navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});



// Validate data form

function validateForm() {

    clearMessages();

    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be black";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;

    }

    if (phone.value.length < 1) {
        errorNodes[2].innerText = "Please enter a correct telephone number";
        phone.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

// Clear error / success 

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }

    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");

}


// Check if email is valid

function emailIsValid(email) {
    let pattern = /\S+@\S+\S+/;
    return pattern.test(email);
}




// COUNTDOWN

simplyCountdown('.count', {
    year: 2022,
    month: 11,
    day: 25,
    hours: 0,
    minutes: 0,
    seconds: 0,
    words: {
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true,
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true,
    onEnd: function () { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});