//1. Loops logs 0-99 Ascending
for (let i = 0; i<100; i++){
    console.log(i)
}

console.log("Number Two")
//2. Loop log 99-0 Descending
for (let i = 99; i>=0; i--){
    console.log(i)
}

console.log("Number Three")
//3. Loop logs EVEN numbers 0-98 Ascending
for(i=0; i<= 98; i++){
    if(i % 2 ==0 ){
        console.log(i)
    }
}

console.log("Number 4")
//4. Loops logs EVEN number from 98-0 Descending
for(i=98; i>= 0; i--){
    if(i%2==0){
        console.log(i)
    }
}

console.log('Number 5')
//5. Loops log ODD number from 0-99 Ascending
console.log(0)
for(i=0; i<=99; i++){
    if(i%2 != 0){
        console.log(i)
    }
}

console.log('Number 6')
//6. Loops log ODD number from 99-0 Descending
for(i=99; i>=0; i--){
    if(i%2 != 0){
        console.log(i)
    }
}
console.log(0)

console.log('Number 7')
//7. Create Loop log numbers 49-72 Ascending
let num = 0

while(num <99){
    num++
    if(num>=49 && num<=72){
        console.log(num)
    }
}

console.log('Number 8')
//8. Create Loop log numbers 81-26 Descending
let num2 = 100

while(num2 > 0){
    num2--
    if(num2<=81 && num2 >= 26){
        console.log(num2)
    }
}

console.log('Number 9')
//9. Create Loop log numbers 3-90 that are multiples of 3 Ascending
for(k=3; k<=90; k++){
    if(k%3==0){
        console.log(k)
    }
}