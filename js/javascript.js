let calcScreen = document.getElementById("screen");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let numOne = "";
let numTwo = "";
let calculation = 0;
let operation;

function numbers(num){
  if(num === '.' && numOne.includes('.')){
    return;
  }
  numOne += num.toString();
  calcScreen.value = numOne;
  return calcScreen;
}

function operations(op){
  if (numOne === ''){
    return;
  }

  if (numTwo !== ''){
    calculate();
    numOne = calculation.toString();
  }
  operation = op;
  numTwo = numOne;
  numOne = "";
}

function calculate(){
  numOneInt = parseFloat(numOne);
  numTwoInt = parseFloat(numTwo);
  if (isNaN(numOneInt) || isNaN(numTwoInt)){
    return;
  }
  switch(operation){
    case "+":
      calculation = numTwoInt + numOneInt;
      break;
    case "-":
      calculation = numTwoInt - numOneInt;
      break;
    case "*":
      calculation = numTwoInt * numOneInt;
      break;
    case "/":
      calculation = numTwoInt / numOneInt;
      break;
    default:
      break;
  }
  calcScreen.value = calculation;
  return calcScreen;

}

//numbers
one.addEventListener("click", function(){
  numbers(one.innerHTML);
});

two.addEventListener("click", function(){
  numbers(two.innerHTML);
});

three.addEventListener("click", function(){
  numbers(three.innerHTML);
});

four.addEventListener("click", function(){
  numbers(four.innerHTML);
});

five.addEventListener("click", function(){
  numbers(five.innerHTML);
});

six.addEventListener("click", function(){
  numbers(six.innerHTML);
});

seven.addEventListener("click", function(){
  numbers(seven.innerHTML);
});

eight.addEventListener("click", function(){
  numbers(eight.innerHTML);
});

nine.addEventListener("click", function(){
  numbers(nine.innerHTML);
});

zero.addEventListener("click", function(){
  numbers(zero.innerHTML);
});

decimal.addEventListener("click", function(){
  numbers(decimal.innerHTML);
});




//operations
add.addEventListener("click", function(){
  operations(add.innerHTML);
});

subtract.addEventListener("click", function(){
  operations(subtract.innerHTML);
});

multiply.addEventListener("click", function(){
  operations(multiply.innerHTML);
});

divide.addEventListener("click", function(){
  operations(divide.innerHTML);
});

clear.addEventListener("click", function(){
  numOne = "";
  numTwo = "";
  calculation = 0;
  calcScreen.value = "0";
  return calcScreen;
});

equal.addEventListener("click", function(){
  calculate();
  numOne="";
  numTwo="";
});
