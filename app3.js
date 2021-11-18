let phone = "phone";
let email = "email";
let password = "password";

let isValid;



if ((password == null) || (phone == null & email == null)) {
    isValid = false;
}
else {
isValid = true;}

console.log(isValid);


fruits = ["apple", "banana", "watermelon"];
console.log("length of the array 'fruit' is ", fruits.length);
fruits[0] = "mint";
console.log(fruits[0]);

fruits.push("onion");


fruits.pop();
console.log(fruits);

fruits.shift("x");

console.log(fruits);

countries = ["UK","CZ", "USA"];
console.log(countries);
countries.push("scotland");
console.log(countries);

countries.shift();
console.log(countries);

countries[2] = "UK"
console.log(countries);

// while loop


/*
let rand = Math.floor(Math.random()*10); 

console.log(rand);
let guess = prompt("Guess the number!");
let count = 0;


while ((guess != rand) && (count < 4)){
    count++;
    alert("you didn't guess right!")
    let guess = prompt("Have another guess!");
}
*/

//print elements from back to front

/*

let array = ["A", "B", "C"];

for (let i = array.length -1; i>=0; i-- ){
    console.log(array[i])
}


for (let i = 0; i<5; i++){
    console.log('i=' +i);
    if(i==2){
        break;
    }
}

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i=0;i<(letters.length-1); i=i+2){
    console.log("letter", i+1, "=", letters[i] );
}

function product(a,b){
    return a*b;
}


console.log(product(4,5));

function afford(balance, price){
    if (balance >= price){
        afford = true;
    }
    else {
        afford = false;
    }
    return afford;

}

let balance = prompt("How much money you have?");
let price = prompt("what is the price?");
if (afford(balance,price) == true){
    alert("you can afford it!");}
    else {
        alert("you cannot afford it!");
    }
*/

    // HOMEWORK 1
    /* Use 3 prompt() and allow the user to enter 3 favourite city names and store
    the values in an array called favoriteCities

    • Use prompt() to ask user to enter a city they live in
    • If the user enters a city that is in the list, show popup saying “<city> is one of
    my favourite cities!”
    • If the user enters a city that is not in the list, show popup saying “I’m not a fan
    of <city>”

    */

    /*

    let favouriteCities = [];
    let count = 0;

    while (count<favouriteCities.length ) {
        
        favouriteCities[count] = prompt("What is your favourite city?");
        count++;
    }
    
    let homeCity = prompt("where do you live?");

    count = 0;
    let fav = false;

    for (count<=favouriteCities.length; count++;){
        if (homeCity == favouriteCities[count]){
            fav = true;
            break;
        }
        else{
            fav = false;
        }
    }

    if (fav == true){
        alert("Your", homeCity, "is one of yourfavourite cities");
    }
    else{
        alert("you are not a fan of " + homeCity);
    }
    */

    // HOMEWORK 2
    /*• Create a sentence in the form of string array:
    • [“The”, “quick”, “brown”, “fox”, “jumps”, “over”, “the”, “fence”]
    • write a function longestWord that takes in the array of string and returns the
    length of the longest word
    • extra: instead of the length of the word, return the longest word (if there are
    more than 1 longest words, return the first one) */

    /*

    mySentence = ["The", "quick", "brown", "fox", "jumps", "over", "the", "fence"];

    function longestWord(sentence) {
        let lengths = [];
        for (let i =0; i< sentence.length; i++ ){
            lengths[i] = sentence[i].length ;
        }

        alert("the longest word has: " + Math.max(...lengths) + " letters");
    }

    
    // add on: return the first longest word

    function longestWord2(sentence){
        let longest = sentence[0];
        for(let i = 1;  i < sentence.length; i++){
            if (sentence[i].length > longest.length){
                longest = sentence[i];
            }
        }
    
        alert(longest + " is the longest word in the sentence. It has " + longest.length + " letters.")
    }


    longestWord(mySentence);
    longestWord2(mySentence);


*/

// HOMEWORK3

/*
Generate a random number range [0,10] inclusive, called target using
Math.floor(Math.random() * 10); console.log(target) so you know the value
• Use prompt() to allow the user to guess the number. User only has 3 attempts
• If the guess is correct, exit the loop and alert() “You win (using <count> attempt/s)”
• If the guess in less than the target, alert() “Your guess is less than target”
• If the guess in greater than the target, alert() “Your guess is greater than target”
• If the user used up all 3 attempts, alert () “You lose”
• You may create as many helper functions as you’d like
*/
function orderno(num){
    let ord;

    if(num == 1){
        ord ="st";
    }
    else if (num == 2){
        ord = "nd";
    }
    else if (num == 3){
        ord = "rd";
    }
    else {
        ord = "th"
    }

    return ord;
}

let target = Math.floor(Math.random() * 10);
console.log(target);


for (let i = 0; i<3; i++){
 guess = prompt("Guess the number!");
 if (guess == target){
     alert("You guessed right on your!" +  orderno(i) + " guess" + "The number was " + guess);
     break;}
 else if (guess < target){
     if (i<2){
        alert("Not right. try something higher");
     }
     else {
        alert("You lost! The number was " + target);
     }
     
    }
else { if (i<2){
    alert("Try a lower number")
        }
        else{  alert("You lost! The number was " + target);
    }
}


 }



