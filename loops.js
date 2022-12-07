//loops

//task 1

const arr = [];
let num = 19.5;

while(num < 30){
  num += 0.5;
  arr.push(num);
}

console.log(arr);

//task 2
let arr2 = [];
let price = 0;
let oneDollar = 27;

while(price < 100){
  price += 10;
  let sum = price * oneDollar;
  arr2.push(sum);
}

console.log(arr2);

//task 4

let inputData  = prompt("input number");
let check = false;

 if(inputData == 1){
  console.log("1 isnt a prime number")
 }
 if(inputData > 1){
  for(let i = 2; i < inputData/2; i++){
    if(inputData % i == 0){
      check = true;
      break;
    }
  }
 }

  if(check == true){
    console.log(`${inputData} isnt a prime number`);
  }
  else{
    console.log(`${inputData} is a prime number`);
  }
 


 