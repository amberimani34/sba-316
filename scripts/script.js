const navBar = document.getElementById('navBar');
navBar.style.height = "2em";

navBar.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
}

const newDiv = document.createElement('div');
const box = document.getElementById('box');

newDiv.innerText = 'Enter your information above to schedule a consultation!';
newDiv.id = 'consultation';
newDiv.classList.add('my-class');
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.marginLeft = "auto";
newDiv.style.marginRight = "auto";
newDiv.style.marginTop = "35px";
newDiv.style.height = "2.5em";
newDiv.style.width = "25em";
newDiv.style.fontSize = "15px";
newDiv.style.borderRadius = "15px";
newDiv.style.textAlign = "center";
newDiv.style.alignContent = "center";
newDiv.style.fontWeight = "bold";

box.appendChild(newDiv);

const textElement = document.getElementById("consultation");
const button = document.getElementById("myButton");

button.addEventListener("click", clickButton);

function clickButton() {
  textElement.innerText = "Your consultation is booked!";
  button.style.backgroundColor = "black";
}

const form = document.getElementById('myform');
const nameV = document.getElementById('nameV');
const dateV = document.getElementById('date');
const emailV = document.getElementById('email');

form.addEventListener('submit', validate);

function validate(evt) {
    evt.preventDefault();  // Prevent form submission right away

    const nameVal = validateName();
    if (nameVal === false) {
        return false;
    }

    const dateVal = validateDate();
    if (dateVal === false) {
        return false;
    }

    const emailVal = validateEmail();
    if (emailVal === false) {
        return false;
    }

    // If validation passes, show alert with collected data
    alert(`Name: ${nameVal}\nDate: ${dateVal}\nEmail: ${emailVal}`);
    return true;  // Allow form submission to proceed
}

function validateName() {
    let nameVal = nameV.value;
    if (nameVal.length === 0) {
        alert("Name must not be empty.");
        nameV.focus();
        return false;
    }
    return nameVal;
}

function validateDate() {
    let dateVal = dateV.value;
    if (!dateVal) {
        alert("Please select a date.");
        dateV.focus();
        return false;
    }
    return dateVal;
}

function validateEmail() {
    let emailVal = emailV.value;
    const atSign = emailVal.indexOf('@');
    const dot = emailVal.lastIndexOf('.');

    if (atSign < 1) {
        alert("Your email does not include the @ symbol!");
        emailV.focus();
        return false;
    }

    if (dot - atSign < 2) {
        alert("Invalid structure: @. \n You must include a domain name after the @ symbol.");
        emailV.focus();
        return false;
    }

    return emailVal;
}

