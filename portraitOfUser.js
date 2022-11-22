//не зрозумів як об'єднати 2 switcha та зробити спільний alert, тому для спорта окремий alert

const userBirthday = window.prompt("Enter your year of birth");
const userCity = window.prompt("Enter your city");
const userSport = window.prompt("Enter your favourite kind of sport");
const age = 2022 - userBirthday;
const result = window.confirm("Show me result");

    switch(userCity){
        case "Kyiv":
            alert(` ${age} You are live in the capital of Ukraine`);
            break;
        case "Washington":
            alert(` ${age} You are live in the capital of USA`);
            break;
        case "London":
            alert(` ${age} You are live in the capital of England`);
            break;
        case "":
            alert("Sorry, return and choose your city")
            break;

         default: 
             alert(` ${age} You are live in ${userCity}`);
    
    }
    

switch(userSport){
    case "football":
        alert("Cool! Do you want to become new Harry Maguire");
        break;
    case "basketball":
        alert("Cool! Do you want to become new Kobe Bryant");
        break;
    case "boxing":
        alert("Cool! Do you want to become new Mike Tyson");
        break;

    case "":
        alert("Sorry, return and choose your kind of sport")
        break;
    
}




