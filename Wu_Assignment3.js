// // Assignment 3
// // Author: Orion Wu

// // The “Coin Flip” Game Redux

// let coinFlip = '';
// let flip = prompt("How many times would you like to flip the coin? ");

// for (let i = 0 ; i < flip; i++) {
//   coinFlip = Math.round(Math.random());
//   if (coinFlip === 0) {
//     document.write("Heads");
//   } else  {
//     document.write("Tails");
//   }
// }


// // The “Coin Flip Streak” Game

// let coinFlip = '';

// do{
//   coinFlip = Math.round(Math.random());
//     if (coinFlip === 0) {
// 	    document.write("Heads");   
//     } else {
//         document.write("Tails");   
//   }
// } while (coinFlip === 0)


// //Looping a Triangle

// for (let line = '#'; line.length < 8; line += '#') {
//     document.write(line + '<br>');
// }


// Odd or Even?

// for (let num = 0; num < 16; num ++ ) {
//     if (num %  2 === 0) {
//         document.write(num + " is even" + '<br>');
//     } else {
//         document.write(num + " is odd" + '<br>');
//     }
    
// }


// // // Marco! Polo!

// for (let num = 1; num < 101; num ++ ) {
//     if (num % 3 === 0 && num % 5 === 0 ) {
//         document.write("Marco! Polo!"+ '<br>' );
//     } else if (num %  3 === 0) {
//         document.write("Marco!"+ '<br>');
//     } else if (num % 5 === 0) {
//         document.write("Polo!"+ '<br>');
//     }
    
// }


// Countdown

// num = Number(prompt("Please enter a number to count down from. "));
// for (; num > -1; num --) {
//     document.write(num + " ");
// }


// // Validate Repeat Entry in Lab 5 

// do {
//     again = window.prompt("Repeat entries? (y/n)");

//     if (again === 'y') {
//         document.write("Cool. lets repeat the entries");
//         break;
//     } else if (again === 'n') {
//         document.write("Thanks for trying");
//         break;
//     }
// } while (again != 'y' || again != 'n');


// Validate Numeric Entries 
// const iryList = [];

// do {
//     investment = parseFloat(prompt("Enter investment amount: "))
//     if (isNaN(investment)) {
//         alert("Please Resubmit With A Number.")
//     } else {
//         iryList.push(investment)
        
//     } 
// } while (iryList.length < 1)


// do {
//     rate = parseFloat(prompt("Enter interest rate as xx.x: "));
//     if (isNaN(rate)) {
//         alert("Please Resubmit With A Number.");
//     } else if (rate < 0.01 || rate > 6) {
//         alert("Please Enter A Realisitc Rate");
//     } else {
//         iryList.push(rate)
        
//     }
// } while(iryList.length < 2)


// do {
//     years = parseFloat(prompt("Enter number of years: "));
//     if (isNaN(years)) {
//         alert("Please Resubmit With A Number.");
//     } else if (years < 1 || years > 30) {
//         alert("Please Enter A Year Between 1 Through 30");
//     } else {
//         iryList.push(years)
//     }
// } while(iryList.length < 3)


