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
//how do we access the last element of any array.
console.log(names[names.length-1])


//Coding steps 4
// how do we access the first element of any array.
console.log(names[0])

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

//Coding steps 7
function repeatWord(word, n) {
    return word.repeat(n);
}

// repeat hello 3
let repeatedHello = repeatWord('Hello', 3);
console.log(repeatedHello); 

//Coding steps 8
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullName = getFullName('Tom', 'Smith');
console.log(fullName); 

//Coding steps 9
//f array greater then 100
function isSumGreaterThan100(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum > 100;
}

let isSumGreaterThan100Result = isSumGreaterThan100([40, 30, 35]);
console.log(isSumGreaterThan100Result); 

//Coding steps 10
//f array average numbers
function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

let average = calculateAverage([8, 16, 24]);
console.log(average); 

//Coding steps 11
function compareAverages(array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);

    return average1 > average2;
}

function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

let isAverageOfArray1Greater = compareAverages([10, 20, 30], [5, 15, 25]);
console.log(isAverageOfArray1Greater); 

//Coding steps 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

let shouldBuyDrink = willBuyDrink(true, 15.00);
console.log(shouldBuyDrink); // Output: true

//Coding steps 13
function canGoOnDreamVacation(money, vacationDays) {
    // Define money, vacation days
    const requiredMoney = 2000;
    const requiredVacationDays = 7;

    // Money and vacation days meet the minimum requirements
    if (money >= requiredMoney && vacationDays >= requiredVacationDays) {
        return "You can go on vacation! Enjoy your time off!";
    } else {
        return "You might need more money or more vacation days. Plan smart!";
    }
}
let recommendation = canGoOnDreamVacation(1500, 10);
console.log(recommendation);

// This was michael reviewing.