//Creating a variable to export

const greeting = "Hello World!";

//Creating a function to export

const printGreeting = () => {
    console.log("Hello World, I've been exported :o");
}

//Export the variable and function as module objects.
//module.exports.<nameOfExportedVariable> = <nameOfVariable>
module.exports.greetingString = greeting;

module.exports.greetingFunc = printGreeting;