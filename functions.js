const { onCLS } = require("web-vitals");

// function to add two nmbers in javascript
function add(a,b){ 
    return a+b ; 

}
console.log(add(5,5));


function CheckEvenOdd(num){
    if(num %2 ==0){
        return "Even"
    }else { 
        return "Odd";
    }
}
console.log(CheckEvenOdd(7));

// function to find the largest of threee numbers
function  largest(a,b,c){
    if (a>=b && a>=c) return a; 
    if (b>= a && b>=c) return b; 
    return c;

}
console.log(largest(5,9,3));
// function to reverse a string in javascript

function reverseSTring(str){
    let reversed = ''; 
    for (let i = str.lenght - 1 ; i >=0; i--){ 
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseSTring("venki"))


// function to pront multiple WebTransportBidirectionalStream

function multiplicationTable(n){
    for (let i = 1; i <=10; i++){
        console.log(`${n} x ${i}= ${n*i}`);

    }
}
console.log(multiplicationTable(5))