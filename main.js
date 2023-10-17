console.log("welcome to october");
document.write("hey uki");
//alert(1+4);
//window.alert("alert");
document.getElementById("demo").innerHTML = 5+6;
var firstName="kamala";
var lastName="nivi";
var x=10;
let y=23;
console.log(firstName+" "+lastName);
var firstName="root";
console.log(firstName+" "+lastName);
//console log 1
let a=10;
a=12;
console.log(a)
// console log 2

// console log 3
var b=10;
console.log(b+c);
var b=15;
var c=20;
console.log(b+c);
var b=17;
console.log(b+c);
// 

// let p=20;
// {
//     let p=30
// }
// console.log(p);

const p=20;
{
const p=30;
console.log(p);
}
console.log(p);

// console log 4

//console.log(firstName);
//var firstName="kamala";
//var lastName="nivi";
//var q=10;
//console.log(s);
//let s=23;
// console.log(g);
//const g=123;

console.log(12&9)
console.log(9|12)
console.log(2|4)
console.log()


let num1 = 234.345;
console.log(num1.valueOf());

// java number methods

let v = 3;
let q = new Number(3);
let t = 3;

console.log(v == q);
console.log(v === q);
console.log(q === t);

// 
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// 
const sum = eval('10*10+5');
console.log(sum);
//

var firstName="nivetha";
var greet="hello world";
console.log(firstName.concat(greet));
console.log(firstName.concat("",greet));

var m="   hey uki  "
console.log(m.trim());
// 

var n=("good morning to you everyone");
var oxfordDa=n.replace("everyone", "world");
console.log(oxfordDa);

// 



var text1=("hello guys");
console.log(text1.charAt(3));
// str
str='The quick brown box jumps over the lazy dog.';

console.log(str.split(' ',));

//str
str='The quick brown for jumps over the lazy dog.';

console.log(str.slice(31));
console.log(str.slice(0,10));

// 
 var num = 8; var num = 10;

console.log(num);
// 

console.log(typeof typeof 1);
// 
console.log(3 + 4 + '5');
// 

console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
// 

const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
// 

console.log('🥑' + '💻');
// 

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

// 
var america=("Good morning friends");
var slicetwo = america.slice(5);
console.log(slicetwo);
var substringtwo=america.substring(5);
console.log(substringtwo);

var america=("Good morning friends");
var slicetwo = america.slice(-7);
console.log(slicetwo);
var substringtwo=america.substring(-7);
console.log(substringtwo);

var america=("Good morning friends");
var slicetwo = america.slice(12);
console.log(slicetwo);
var substringtwo=america.substring(12);
console.log(substringtwo);

var america=("Good morning friends");
var slicetwo = america.slice(9,5);
console.log(slicetwo);
var substringtwo=america.substring(9,5);
console.log(substringtwo);


var america=("Good morning friends");
var slicetwo = america.slice(-12,-8);
console.log(slicetwo);
var substringtwo=america.substring(-12,-8);
console.log(substringtwo);

var america=("Good morning friends");
var slicetwo = america.slice(-3,-5);
console.log(slicetwo);
var substringtwo=america.substring(-3,-5);
console.log(substringtwo);

var america=("Good morning friends");
var slicetwo = america.slice(5,-3);
console.log(slicetwo);
var substringtwo=america.substring(5,-3);
console.log(substringtwo);

// 
// let person = {
//     name:"Nisha",
//     age:22,
//     Alive:true,
//     adress:"jaffna",
//     gender:"Female",
// }
// console.log(person);
// // dot notation
// console.log(person.name)
// console.log(person.age)
// person.nationality="srilankan tamil"
// console.log(person.nationality)


// day 02

var challenge = 'learn Javascript';

// qu02
var challenge = 'learn Javascript';
console.log(challenge);
// qu03
var challenge = 'learn Javascript';
console.log(challenge.length);
// qu04
var challenge = 'learn Javascript';
var uppercaseChallenge = challenge.toUpperCase();
console.log(uppercaseChallenge);
// qu05
var challenge = 'learn Javascript';
var lowercaseChallenge = challenge.toLowerCase();
console.log(lowercaseChallenge);
// qu06
var challenge = 'learn Javascript';
var firstWord = challenge.substr(0, challenge.indexOf(' '));
console.log(firstWord);

var challenge = 'learn Javascript';
var firstWord = challenge.substring(0, challenge.indexOf(' '));
console.log(firstWord);
// qu07
var challenge = 'learn Javascript';
var slicedPhrase = challenge.slice(6, 22);
console.log(slicedPhrase);
// qu08
var challenge = 'learn Javascript';
var containsScript = challenge.includes('Script');

if (containsScript) {
  console.log('The string contains the word "Script."');
} else {
  console.log('The string does not contain the word "Script."');
}
// qu09
var challenge = 'learn Javascript';
var arrayFromSplit = challenge.split(' ');
console.log(arrayFromSplit);
//qu10
var challenge = 'learn Javascript';
var arrayFromSplit = challenge.split(' ');
console.log(arrayFromSplit);
// qu11
var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');
console.log(companiesArray);
// qu12
var challenge = 'learn Javascript';
var updatedChallenge = challenge.replace('Javascript', '30 Days Of Python');
console.log(updatedChallenge);
// qu13
var challenge = 'learn Javascript';
var characterAtIndex15 = challenge.charAt(15);
console.log(characterAtIndex15);
// qu14
var challenge = 'learn Javascript';
var charCodeOfJ = challenge.charCodeAt(6); // Index 6 corresponds to 'J'
console.log(charCodeOfJ);
// qu15
var challenge = 'learn Javascript';
var positionOfA = challenge.indexOf('a');
console.log(positionOfA);
// qu16
var challenge = 'learn Javascript';
var lastPositionOfA = challenge.lastIndexOf('a');
console.log(lastPositionOfA);
// qu17
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.indexOf('because');
console.log(positionOfBecause);
// qu18
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastPositionOfBecause = sentence.lastIndexOf('because');
console.log(lastPositionOfBecause);
// qu19
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search(/\bbecause\b/);
console.log(positionOfBecause);
// qu20
var str = ' learn Javascript ';
var trimmedStr = str.trim();
console.log(trimmedStr);
// qu21
var str = 'learn Javascript';
var startsWithLearn = str.startsWith('learn');
console.log(startsWithLearn); 
// qu22
var str = 'learn Javascript';
var endsWithJavascript = str.endsWith('Javascript');
console.log(endsWithJavascript);
// qu23
var str = 'learn Javascript';
var matches = str.match(/a/g);
console.log(matches);
// qu24
var firstPart = '30 Days of ';
var secondPart = 'JavaScript';
var mergedString = firstPart.concat(secondPart);
console.log(mergedString);
// qu25
var str = 'learn Javascript';
var repeatedString = str.repeat(2);
console.log(repeatedString);

// day 01 question

// qu01
// Comments can make code readable

// qu02
//  Welcome to learn Javascript

// quo3
/*
   Comments can make code readable,
   easy to reuse, and informative.
*/
// qu04
// Declare and assign a string
var nameD = "John Doe";

// Declare and assign a boolean
var isStudent = true;

// Declare a variable and assign undefined
var age;
age = undefined;

// Declare and assign null
var favoriteColor = null;

// Printing the values
console.log(name);          // Output: John Doe
console.log(isStudent);     // Output: true
console.log(age);           // Output: undefined
console.log(favoriteColor); // Output: null

// QU05
// Declare and assign variables of different data types
var nameD = "John Doe"; // String
var age = 30; // Number
var isStudent = true; // Boolean
var favoriteFruits = ["apple", "banana", "cherry"]; // Array
var person = { firstName: "John", lastName: "Doe" }; // Object
var salary = null; // Object
var country; // Undefined

// Use the typeof operator to check data types
console.log(typeof nameD);            // Output: string
console.log(typeof age);             // Output: number
console.log(typeof isStudent);       // Output: boolean
console.log(typeof favoriteFruits);  // Output: object (arrays are objects)
console.log(typeof person);          // Output: object
console.log(typeof salary);          // Output: object (null is incorrectly identified as an object in JavaScript)
console.log(typeof country);         // Output: undefined

