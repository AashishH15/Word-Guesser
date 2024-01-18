// Define an array of words and hints
const words = [
  {word: "javascript", hint: "A popular programming language for web development"},
  {word: "html", hint: "A markup language used for creating web pages"},
  {word: "css", hint: "A style sheet language used for describing the presentation of a document written in HTML"},
  {word: "website", hint: "A collection of web pages that are linked together and share a domain name"},
  {word: "developer", hint: "A person who creates software, applications, or websites"},
  {word: "python", hint: "A high-level, interpreted programming language with dynamic semantics"},
  {word: "java", hint: "A high-level, class-based, object-oriented programming language"},
  {word: "csharp", hint: "A modern, object-oriented programming language developed by Microsoft"},
  {word: "ruby", hint: "A dynamic, open source programming language with a focus on simplicity and productivity"},
  {word: "php", hint: "A popular general-purpose scripting language that is especially suited to web development"},
  {word: "typescript", hint: "A strict syntactical superset of JavaScript, adding optional static typing"},
  {word: "swift", hint: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS"},
  {word: "kotlin", hint: "A statically typed programming language that runs on the Java virtual machine and can be used to develop all kinds of applications"},
  {word: "rust", hint: "A language empowering everyone to build reliable and efficient software"},
  {word: "go", hint: "An open source programming language that makes it easy to build simple, reliable, and efficient software"}
];

let scrambledWord = ""; // Store the scrambled word
let answer = ""; // Store the answer
let hint = ""; // Store the hint
let guesses = 0; // Keep track of number of guesses
let score = 0; // Keep track of the score

// Update the score display
function updateScoreDisplay() {
  document.getElementById("score").innerText = "First Try Correct: " + score;
}

// Pick a random word from the array and scramble it
function pickWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  answer = words[randomIndex].word;
  hint = words[randomIndex].hint;
  let wordArray = answer.split("");
  wordArray.sort(function() { return 0.5 - Math.random() });
  scrambledWord = wordArray.join("");
  document.getElementById("scrambled-word").innerHTML = scrambledWord;
  document.getElementById("hint").innerHTML = "Hint: " + hint;
  guesses = 1; // Reset guesses
  updateScoreDisplay(); // Update the score display
}

// Check the guess against the answer
function checkGuess() {
  let guess = document.getElementById("guess-input").value.toLowerCase();
  if (guess === answer) {
    if (guesses === 1) {
      score += 1;
    }
    document.getElementById("message").innerHTML = "Correct! It took you " + (guesses) + " guesses.";
    document.getElementById("submit-button").disabled = true;
    document.getElementById("next-button").style.display = "inline-block";
  } else {
    document.getElementById("message").innerHTML = "Incorrect. Try again.";
    guesses++;
  }
  updateScoreDisplay(); // Update the score display
}

// Move on to the next word
function nextWord() {
  document.getElementById("guess-input").value = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("submit-button").disabled = false;
  document.getElementById("next-button").style.display = "none";
  guesses = 0;
  pickWord();
}

// Call pickWord function on page load
window.onload = function() {
  pickWord();
}
