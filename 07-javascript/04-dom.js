// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let ouput = document.querySelector("#output");

// add an event listener on the target element

copy.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("click even", event);
  output.textContent = userInput.value;
}

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

let userInput2 = document.querySelector("#userInput2");
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

//let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
section.append(element);
// callback function to handle event

function handleInput(event) {
  console.log(userInput2.value);
  element.textContent = userInput2.value;
}
