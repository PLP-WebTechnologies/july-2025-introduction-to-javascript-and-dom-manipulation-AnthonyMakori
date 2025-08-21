// ========================
// Part 1: Basics
// ========================
let userName = "Alex";
let userAge = 20;

// Conditional check
if (userAge >= 18) {
  document.getElementById("basics-output").textContent =
    `${userName} is ${userAge} years old and is an adult.`;
} else {
  document.getElementById("basics-output").textContent =
    `${userName} is ${userAge} years old and is not an adult.`;
}

// ========================
// Part 2: Functions
// ========================
function greetUser() {
  document.getElementById("function-output").textContent =
    `Hello, ${userName}! Welcome to JavaScript.`;
}

function calculateTotal(price, taxRate) {
  let total = price + (price * taxRate / 100);
  document.getElementById("function-output").textContent =
    `Price: $${price}, Tax: ${taxRate}%, Total: $${total.toFixed(2)}`;
}

// ========================
// Part 3: Loops
// ========================
function showNumbers() {
  let list = document.getElementById("loop-output");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
}

function countdown(start) {
  let list = document.getElementById("loop-output");
  list.innerHTML = "";
  let i = start;
  while (i >= 0) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
    i--;
  }
}

// ========================
// Part 4: DOM Manipulation
// ========================
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dom-text").textContent = "The text has been changed!";
});

document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("dom-text").classList.toggle("highlight");
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New dynamic item added!";
  document.getElementById("dom-list").appendChild(li);
});

// ========================
// Advanced DOM Example: Form
// ========================
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  let name = document.getElementById("name").value.trim();
  let age = parseInt(document.getElementById("age").value);
  let output = document.getElementById("form-output");

  if (!name || isNaN(age)) {
    output.textContent = "⚠ Please enter a valid name and age!";
    output.style.color = "red";
  } else {
    output.textContent = `🎉 Hello ${name}, you are ${age} years old!`;
    output.style.color = "green";
  }
});

// ========================
// Advanced Example: Live Counter
// ========================
let counterValue = 0;
let counterInterval;

function startCounter() {
  if (!counterInterval) { 
    counterInterval = setInterval(() => {
      counterValue++;
      document.getElementById("counter").textContent = `Counter: ${counterValue}`;
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(counterInterval);
  counterInterval = null;
}
