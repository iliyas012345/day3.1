
//for loop
let array = [23,44,55,6766,33,55,"school","college"]
for(let i=0;i<array.length; i++){
    console.log(array[i])
}

// for in loop
let obj = {
    "tamil mark" : "80",
    "engilsh mark" : "50",
    "maths mark" : "70",
    "science mark": "85",
    "social mark": "96"
    
}
for(let key in obj){
    console.log(obj[key])
}
//for of loop
let animal =["lion","tiger","elephant","zebra"]
for(let index of animal){
    console.log(index)
}