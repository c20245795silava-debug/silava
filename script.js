console.log("Hello word.");
console.log("From script.js file.");

const myName = "mycca";
let age = 21;
let number = 995440209;
const address = "Miraflores";
let number1 = 67;

console.log(`My name is ${myName}, ${age} years old.`);
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
heading.style.fontSize = "50px";
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const myServicesHeading = document.querySelector("#services h2");
console.log(myServicesHeading);

