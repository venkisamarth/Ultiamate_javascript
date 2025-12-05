
const prompt= require("prompt-sync")();
let sum = 0 ; 
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i =0 ; i <n; i++){
    sum =sum+i
    console.log(i)
}
console.log("sum of first ",n +"bartural number is ",+sum)

let obj = { 
    harry : 90,
    venki: 34,
    sachine: 23,
    raju:34,
    ravi:34
}
for (let a in obj){ 
    console.log("marks of "+ a+ "are"+obj[a])
}

for(let b of "harry"){
    console.log(b)
}