// 1. 
function maxOfTwoNumbers(x,y){
    if (x>= y){
        return x;
    } else {
        return y
    }
    // ternary = return x >= y ? x : y
}
console.log(maxOfTwoNumbers(3,9))

// 2.
let maxOfThree = function(x,y,z){
    let largest = null
    if (x >= y){
        largest = x
    } else {largest = y}

    if (z > largest){
        largest = z
    }
    return largest
}
console.log(maxOfThree(75,88,60))

// 3. 
function isCharAVowel(char){
    vowels = ["a","e","i","o","u"]
    if (vowels.includes(char.toLowerCase())){
        return "True"
    }
    // else if (char.toLowerCase() = "y"){
    //     return "Eh...Depends..."
    // }
    else{ return "False"}
}
console.log(isCharAVowel("M"))

// 4.
let sumArray = function(arr){
     let array = []
     array.push(arr)
    const start = 0
    let sum = arr.reduce(
        (accumular, currentValue) => accumular + currentValue, start
    )
    return sum
}
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]))

// 5. 
function multiplyArray(arr) {
    let array = []
    array.push(arr)
    let start = 1
    let sum = arr.reduce(
        (accumular, currentValue) => accumular * currentValue, start
    )
    return sum
}
console.log(multiplyArray([1,2,3,4,5,6,7,8,9,10]))

//6. 
let numArgs = function(){
    return(arguments.length)
}
console.log(numArgs(2,"r",6, "y",7,8))

// 7. 
function reverseString(str){
    
}