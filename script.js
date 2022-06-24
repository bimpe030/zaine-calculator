function calculator(){
    let calculate = prompt("What action would you like to perform (Addition, Sutraction, Multiplication or Division)");

    let num1 = prompt ("Enter First Number:");
    let num2 = prompt ("Enter Second Number");

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (calculate == "addition"){
        alert(num1+num2)
    }

    else if (calculate == "subtraction"){
        alert(num1-num2)
    }

    else if (calculate == "division"){
        alert(num1/num2)
    }

    else if (calculate == "multiplication"){
        alert(num1*num2)
    }

    else{
        alert("Invalid Selection")
    }

    let anotherOperation = prompt("Would you like to perform another calculation");

    if (anotherOperation == "yes"){
        calculator()
    }  else {
        alert("Thank you, Bye Bye")
    }
}


calculator ()
