console.log("Hello word.");
console.log("From script.js file.");

const myName = "mycca";
let age = 21;
age = 20;
let number = 995440209;
const address = "Miraflores";

console.log(`My name is ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);


function greet(name) {
    if (Array.isArray(name)) {
        name = name.join(", ");
    }
    return `${greetings} sa enyu ${name}`;
}

console.log(greet("Ma ayong aga ", ["mycca", "Bai", "Soy", "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Cesar";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading.textContent);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked.");
})

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);

const togglebutton = document.querySelector("#switch");
const body = document.querySelector("body");
let issOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});