console.log("Hello word.");
console.log("From script.js file.");

const myName = "mycca";
let age = 21;
let number = 995440209;
let address = "Miraflores";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);


function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greetings} sa enyu ${names}`;
}

console.log(greet("Ma ayong aga", ["mycca", "Bai", "Soy", "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Cesar Silava ";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked!");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeading = document.querySelector("#services h2");
console.log(projectsHeading);

const togglebutton = document.querySelector("#switch");
const body = document.querySelector("body");
let issOff = false;

togglebutton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});


