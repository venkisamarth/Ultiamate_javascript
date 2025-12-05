const prompt =require("prompt-sync");
// let input = prompt("Enter a number");
// input = Number.parseInt(input);
// let i = 0;

// while (i < input) {
//     console.log(i);  // print the current value of i
//     i++;  // increment i by 1
// }

let i = 1;
while(i <=5){ 
    console.log(i)
    i ++;

}

let num = 0; 
while(num<= 10){
    console.log(num);
    num +=2;
}

let count = 5; 
while(count>=1){
    console.log(count);
    count--;

}

// sum of firset 5 natural numbers in javascript 
let j = 1; 
let sum = 0 ; 
while (j<=5){
    sum = sum+j;
    j ++;
}
console.log(sum)

let password = '1234';
let userInput = "0000";
let attempts = 0;

while (userInput !== password){
    console.log("Wrong password! Trying agin...");
    attempts++;

    if (attempts==3){
        userInput=="1234";
    }

}
console.log("ACcess granted")