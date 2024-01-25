// Coding steps 1

//array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// firts and last element in array
let lastElementIndex = ages.length - 1;
let result = ages[lastElementIndex] - ages[0];
console.log(`Result: ${result}`);

// New age
ages.push(35);

// dynamically repeat
result = ages[lastElementIndex] - ages[0];
console.log(`Updated Result: ${result}`);

// loop average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let averageAge = sum / ages.length;
console.log(`Average Age: ${averageAge}`);




// Coding steps 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// loop per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

let averageLettersPerName = totalLetters / names.length;
console.log(`Average Number of Letters per Name: ${averageLettersPerName}`);

// loop to all names together
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}

// Coding steps 3
//Coding steps 4


//Coding steps 5 

//array called names
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// array called nameLengths
let nameLengths = [5,3,4,2,6,1];

// loop to add the length of each name to nameLengths
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log(`Name Lengths: ${nameLengths}`);

//Coding steps 6

nameLengths = [5, 3, 4, 2, 6, 1];
sum = 0;

//loop to calculate the sum
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}

console.log(`Sum of Name Lengths: ${sum}`);


