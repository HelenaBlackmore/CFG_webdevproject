

// ------------- LOGICAL OPERATORS ----------------

// 1. AND: &&
// 2. OR: ||
// 3. NOT: !

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1);
// console.log(x == 5 || y == 5);
// console.log(!(x == 5));
 
// console.log(true && true);      // true
// console.log(true && false);     // false
// console.log(false && true);     // false
// console.log(false && false);    // false

// console.log(true || true);      // true
// console.log(true || false);     // true
// console.log(false || true);     // true
// console.log(false || false);    // false

// console.log(!true);             // false
// console.log(!false);            // true

// // multiple operators - evaluated left to right 
// console.log(false && false || true);    // true
// console.log((false && false) || true);  // true
// console.log(false && (false || true));  // false

// // short-circuit evaluation
// let a = 10;
// let shortCircuit1 = false && a + 1 >= 11;
// let shortCircuit2 = true || a + 1 >= 11;

// // short-circuit does NOT apply when you have > 1 operator
// console.log(false && false || true);


// // Ternary conditional operator
// // variablename = (condition) ? value1 : value2;
// if condition is true: variablename will be set to value1
// if condition is false: variablename will be set to value2

// let count = 2;

// const turnString1 = count == 1 ? "turn" : "turns";

// let turnString2;
// if (count == 1) {
//     turnString2 = 'turn';
// } else {
//     turnString2 = 'turns';
// }

// Exercise
// 1. a user has username, which can be an email or phone number, but not both
// 2. a user also has a password, which is always required
// 3. create variables that hold values for email, phone, and password. For a variable with no value, use null
// 4. valid credentials are combination of either (email + password) or (phone number + password)
// 5. create a variable 'isValid' that is set to true if the credential combinations are valid, and false otherwise
// 6. multiple valid solutions available

// let email = "email";                // can be any value
// let phoneNumber = "phoneNumber";    // can be any value
// let password = "password";          // can be any value
// let isValid;

// // solution 1
// const onlyEmailOrPhoneNumber = (email != null && phoneNumber == null) || (email == null && phoneNumber != null);
// if (password != null && onlyEmailOrPhoneNumber) {
//     isValid = true;
// } else {
//     isValid = false;
// }
// console.log(isValid);

// // solution 2
// const onlyEmailOrPhoneNumber = (email != null && phoneNumber == null) || (email == null && phoneNumber != null);
// isValid = password != null && onlyEmailOrPhoneNumber;

// // solution 3
// if (password == null || (email != null && phoneNumber != null)) {
//     isValid = false;
// } else {
//     isValid = true;
// }


// ------------- ARRAY ----------------

// array is a list of elements
// can hold any type of values (doesn't have to be the same type)
// elements in array is indexed from 0 to array.length - 1
// e.g. if length is 10, array will have index 0-9
// use array[i] to access element at index i

// const randomList = ["Apple", 1, true, null, 'cloudy'];
// const fruits = ["Apple", "Orange", "Banana", "Grapes", "Watermelon", "Peach"];


// console.log(fruits[1]);     // Orange
// console.log(fruits[5]);     // Peach
// console.log(fruits[6]);     // undefined

// // setting the value of an element in array
// fruits[0] = "Coconut";
// console.log(fruits);        // ["Coconut", "Orange", "Banana", ...]

// console.log(fruits.length);         // 6

// console.log(fruits[0]);     // Apple
// console.log(fruits[1]);     // Orange
// console.log(fruits[2]);     // Banana
// console.log(fruits[3]);     // Grapes
// console.log(fruits[4]);     // Watermelon
// console.log(fruits[5]);     // Peach

// console.log(fruits);         // 6

// fruits.push("Strawberry");
// console.log(fruits);         // 6

// fruits.pop();
// console.log(fruits);

// fruits.shift("Tomato");
// console.log(fruits);

// array methods

// const studentNames = ["Abby", "Bella", "Charlie", "David"];

// // add to end of array
// studentNames.push("Emma");
// console.log(studentNames);  // ["Abby", "Bella", "Charlie", "David", "Emma"]

// // add to beginning of array
// studentNames.pop();
// console.log(studentNames);  // ["Abby", "Bella", "Charlie", "David"]

// // remove from front
// studentNames.shift();
// console.log(studentNames);  // ["Bella", "Charlie", "David"]

// // add to front
// studentNames.unshift("Adam");
// console.log(studentNames);  // ["Adam", "Bella", "Charlie", "David"]

// // check if array includes a value
// console.log(studentNames.includes("Emma"));     // false
// console.log(studentNames.includes("Bella"));    // true

// Exercise
// 1. Create an array called countries and initialise it with any 3 countries
// 2. console.log(countries) to check if it was created correctly
// 3. Add a country to the end of the array
// 4. Remove the first country from the array
// 5. Change the name of country at index 2 to "UK"

// // solution
// const countries = ["Spain", "Australia", "USA"];
// console.log(countries);
// countries.push("Canada");
// countries.shift();
// countries[2] = 'UK';
// console.log(countries);


// ------------- WHILE LOOOPS ----------------

// Execute a certain piece of code WHILE the condition is true

// let i = 0;

// while(i < 2) {
//     console.log("i = "+i);
//     i++;
// }

// console.log('End i = ' + i);

// i++; means i += 1; or i = i + 1; or increase i by 1
// i++;
// i += 1;
// i = i + 1;

// Exercise
// 1. Generate a random number range [0,10] inclusive, called target using Math.floor(Math.random() * 10);
// 2. Use prompt() to allow the user to guess the number
// 3. While the guess is incorrect, keep asking the user for a new guess
// 4. When the user guess it correctly, alert() saying how many turns they took to get the answer correctly "You took <count> turns"
// 5. extra: use "turn" when it’s 1 and "turns" when it was more than 1

// Solution

// let target = Math.floor(Math.random() * 10);
// console.log(target);
// let count = 1;
// let guess = prompt("Enter your guess: ");

// while(guess != target) {
//     guess = prompt("Enter your guess: ");
//     count++;
// }

// // Ternary Conditional Operator
// const turn = count == 1 ? "turn" : "turns";

// alert(`You took ${count} ${turn}`);



// ------------- FOR LOOOPS ----------------

// for(let i = 0; i < 2; i++) {
//     console.log("i = "+ i);
// }


// while vs. for loop

// let array = ['A', 'B', 'C'];

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// break
// let i = 0;
// while(i < 5) {
//     console.log('i = ' + i);
//     if (i == 2) {
//         break;
//     }
//     i++;
// }

// for(let i = 0; i < 5; i++) {
//     console.log('i = ' + i);
//     if (i == 2) {
//         break;
//     }
// }

// exercise 1
// 1. Create a for loop that prints the elements in an array from back to front
// 2. i.e. if we have an array [‘A’, ‘B’, ‘C’], we want to log ‘C’ ‘B’ ‘A’

// // exercise 1 - solution
// let array = ['A', 'B', 'C'];
// for(let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// exercise 2
// 1. Create an array called letters with 10 first letters of the alphabet
// 2. console.log() the the name of every other letter 
//      2.1 i.e. "letter 1: A", "letter 3: C", "letter 5: E", etc. 
//      2.2 extra: use while loop and for loop

// exercise 2 - solution
// let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
// for(let i = 0; i < letters.length; i += 2) {
//     console.log(`letter ${i + 1}: ${letters[i]}`);
// }


// ------------- FUNCTION ----------------

// function product(a, b) {
//     return a * b;
// }

// let result = product(8, 2);

// console.log(result);


// function add(a, b) {
//     return a + b;
// }

// note: showGreetings() can be called before and after declaration
// showGreetings("Charlie");
// function showGreetings(name) {
//     alert(`Hi ${name}`);
// }
// showGreetings("Charlie");

// // return the word 'turn' or 'turns' based on the turnCount
// function getTurnPlural(turnCount) {
//     if (turnCount == 1) {
//         return 'turn';
//     } else {
//         return 'turns';
//     }
// }

// function getTurnPlural(turnCount) {
//     if (turnCount == 1) {
//         return 'turn';
//     } 
//     return 'turns';
// }

// exercise
// 1. Write function canAffordItem that takes in price and balance and returns a boolean indicating if we can afford the item or not
// 2. If balance is less than price, then return false
// 3. If balance is not less than price, then return true
// 4. this question has several valid code solutions, try to come up with at least 2

// Exercise 1: solution
// function canAffordItem(price, balance) {
//     if (balance < price) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function canAffordItem(price, balance) {
//     if (balance < price) {
//         return false;
//     }
//     return true;
// }

// function canAffordItem(price, balance) {
//     return !(balance < price);
// }

// function canAffordItem(price, balance) {
//     return balance >= price;
// }

// Exercise 2
// 1. Write a function getMovieDetails that takes string title and number releaseYear and return "<title> was released in < releaseYear >"
// 2. What is the return type of the function?

// Exercise 2: solution
// function getMovieDetails(title, releaseYear) {
//     return `${title} was released in ${releaseYear}`;
// }
// console.log(getMovieDetails("James Bond", 2021));


// ------------- SCOPE ----------------

// example 1:

// code here CANNOT use fox

// function myFunction() {
//     let fox = "Fox";
//     // code here CAN use fox
// }

// // example 2:

// let fox = "Fox";
// // code here CAN use fox

// function myFunction() {
//     // code here CAN use fox
// }

// let animals = ["Cat", "Dog", "Fish"];

// function showAnimals() {

//     let animalNames = ["Coco", "Doug", "Fred"];

//     for (let i = 0; i < animals.length; i++) {
//         console.log(animals[i]);
//     }

// }




// Homework 1 - Solution
// const favoriteCities = [];
// for(let i = 0; i < 3; i++) {
//     let city = prompt(`Enter favorite city #${i + 1}:`);
//     favoriteCities[i] = city;   // can use favoriteCities.push(city) as well
// }

// const city = prompt('What city do you live in?');
// if (favoriteCities.includes(city)) {
//     alert(`${city} is one of my favorite cities!`);
// } else {
//     alert(`I'm not a fan of ${city}`);
// }


// Homework 2 - Solution
// let sentence = ["The", "quick", "brown", "fox", "jumps", "over", "the", "fence"];
// console.log(longestWord(sentence));

// function longestWord(words) {
//     let maxLength = -1;
//     for(let i = 0; i < words.length; i++) {
//         const length = words[i].length;
//         if (maxLength < length) {
//             maxLength = length;
//         }
//     }
//     return maxLength;
// }


// Homework 3 - Solution
// let target = Math.floor(Math.random() * 10);
// console.log("target = " + target);
// let didWin = false;
// let attemptCount = 1;

// for(let i = 0; i < 3; i++) {
//     let guess = prompt("Enter your guess: ");
//     if (guess < target) {
//         alert("Your guess is less than target");
//     } else if (guess > target) {
//         alert("Your guess is greater than target");
//     } else {
//         didWin = true;
//         break;
//     }
//     attemptCount++;
// }

// alertWinLoseResult(didWin, attemptCount);

// function alertWinLoseResult(userWin, userAttempts) {
//     if (userWin) {
//         let attemptString = userAttempts == 1 ? 'attempt' : 'attempts';
//         alert(`You win (using ${userAttempts} ${attemptString})`);
//     } else {
//         alert('You lose');
//     }
// }



