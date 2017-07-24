// var name = 'Slim Shady';

// var printName = function() {
//   console.log('Hi! My name is', name);
// };

// printName();

// // result:  'Hi! My name is Slim Shady'
// // global variable 'name' is pulled in to printName function to interpolate a String



// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };

// console.log(result());

// // result = 3
// // local variable var score = 3 , overwrites global variable of score = 5.  Logged to console by calling result()


// var myAnimals = ['chickens', 'cats', 'rabbits'];

// var listAnimals = function() {
//   myAnimals = ['ducks', 'dogs', 'lions'];
//   for(var i=0; i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();

// // result: prints to console each key(index) of the array followed by value - 0:ducks, 1:dogs, 2:lions
// // global variable array of myAnimals is over-written by declaring of a new global variable array in the listAnimals function.  when function is called this logs to console the key and the value


// var suspectOne = 'Alan';
// var suspectTwo = 'Steve';
// var suspectThree = 'John';
// var suspectFour = 'Ally';

// var allSuspects = function() {
//   var suspectThree = 'Adam'
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// };

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

// // result: 
// // firstly, lists all suspects: 'Suspects include: ' with 'John' swapped out with 'Adam' as suspectThree is set as a local variable.  Print out to screen, Alan, Steve, Adam, Ally
// // secondly, 'Suspect three is: John' .  John remains SuspectThree as the global variables are not over-written as we are not calling function allSuspects()

// // suspects one to four defined as Global variables to start, only over-written when function is called 


// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };

// var printName = function(detective) {
//   return detective.name
// };

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };

// console.log(detectiveInfo());

// // result: logs to console detective['name'] - 'Poirot'.  
// // logged to console is the result of detectiveInfo() function which in turn calls on function printName which returns the var detective name: . 'Ace Ventura' has been over-written by new Global variable 'Poirot' in detectiveInfo function.


// var murderer = 'John';

// var outerFunction = function() {
//   var murderer = 'Ally';

//   var innerFunction = function() {
//     murderer = 'Steve';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('The murderer is', murderer);
 
// // result of console.log - 'The murderer is John', it is simply interpolating a string with the global variable which has been set outwith the functions.  nothing is calling the function provided.
// // no result of outerFunction() - nothing is being logged to console.  



// CHAPTER 7:

var drugLord = {
  name: 'Walter White',
  product: 'Crystal Meth',
  balance: 2000000,
};

var drugsForSale = function(drugLord){
  return drugLord.product;
} 

drugLord.product = 'Cocaine';

var newGuyInTown = function(drugLord){
  drugLord.name = 'Keyser Soze';
  drugLord.product = 'Spice';
  return drugLord.name;
}

console.log(drugLord);
console.log('All hail the new drug-lord: ' + newGuyInTown(drugLord));
console.log('The current drug of choice is ' + drugsForSale(drugLord));








