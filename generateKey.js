const chars =  "0123456789abcdefghijklmnopqrstuvwxyz!@#$^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomNum(){
    return Math.floor(Math.random() * chars.length);
}

function randomKey(length, chars){
   const genKey = [];

   for(let i = 0; i <= length; i++){
         genKey.push(chars[getRandomNum(0, chars.length)]);
   }

   return genKey.join('');
}

const res = randomKey(16, chars)
console.log(res)