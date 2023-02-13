const arr = [];
const arrLength = prompt("Введіть кількість елементів массиву");



for(let i = 0; i <= arrLength; ++i){
    arr[i] = prompt("Введіть елементи массиву" +  i );
    if(arr[i] === null){
        alert("Введіть елементи");
    }

    if(arr[i] === ''){
        alert("Ви не ввели жодного елемента");
         arr[i] = prompt("Введвть елементи массиву")
    }
}

arr.sort((a, b) => a - b)
const newArr =  arr.slice(2,5)

console.log(arr);
console.log('Видалені елементи',newArr)
