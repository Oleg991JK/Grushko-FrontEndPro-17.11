const inputData = window.prompt("Choose operation");

const firstNumber = +window.prompt("Enter first number", 0);
const secondNumber = +window.prompt("Enter second number", 0);





switch(inputData) {
    case "add": 
      const addResult = firstNumber + secondNumber;
        alert(`Result ${firstNumber} + ${secondNumber} = ${addResult} `);
    break

    case "mult":
        const multResult = firstNumber * secondNumber;
        alert(`Result ${firstNumber} * ${secondNumber} = ${multResult}`);
    break

    case "sub":
        const subResult = firstNumber - secondNumber;
        alert(`Result ${firstNumber} - ${secondNumber} = ${subResult}`);
    break  

    case "div":
        const divResult = firstNumber / secondNumber;
        alert(`Result ${firstNumber} / ${secondNumber} = ${divResult}`);
        break
    default:
    alert("return to choose operation");

}
