const { onCLS } = require("web-vitals");

const prompt= require("prompt-sync")();
let age =prompt("What is your age")
age = Number.parseInt(age)
if(age>10 && age<20){ 
    console.log("You age lies between 10 and 20")
}
else { 
    console.log("your age doesont between 10 and 20")
}


// problem number 2
let age_= prompt("What is your age?")
switch(age_){ 
    case "12": 
    console.log("Your age is 12")
    break
    case "13":
        console.log("your age is 13")
        break
    case "14": 
    console.log("Your age is 14")
}
let num = prompt("what is your age?")
if(num %2 ==0 && num && 3 ==0){ 
    console.log("Your  number is not divisible by 2 and 3")

}else { 
    console.log("Your name is not diviable by 2 and 3")
}


let age__=19; 
let a=age__>18? "you can drive": "you cannot drive"
console.log(a)