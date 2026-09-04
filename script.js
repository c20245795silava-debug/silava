console.log("Hello word.");
console.log("From script.js file.");

const myName = "mycca";
let age = 21;
let number = 995440209;
const address = "Miraflores";

console.log(`My name is ${myName}, ${age} years old.`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);


function greet(name) {
    if (Array.isArray(name)) {
        name = name.join(", ");
    }
    return `${greetings} sa emu, ${name}`;
}

console.log(greet("Ma ayong aga ", ["mycca", "Bai", "Soy"]));



