function calculator(){
    let calculate = prompt("What action would you like to perform (Addition, Subtraction, Multiplication or Division)");


    if (calculate == "addition"){
        let num1 = prompt ("Enter First Number:");
        let num2 = prompt ("Enter Second Number");

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1+num2)
    }

    else if (calculate == "subtraction"){
        let num1 = prompt ("Enter First Number:");
        let num2 = prompt ("Enter Second Number");

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1-num2)
    }

    else if (calculate == "division"){
        let num1 = prompt ("Enter First Number:");
        let num2 = prompt ("Enter Second Number");

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1/num2)
    }

    else if (calculate == "multiplication"){
        let num1 = prompt ("Enter First Number:");
        let num2 = prompt ("Enter Second Number");

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1*num2)
    }

    else{
        alert("Invalid Operation Selected")
    }

    let anotherOperation = prompt("Would you like to perform another calculation");

    if (anotherOperation == "yes"){
        calculator()
    }  else {
        alert("Thank you, Bye Bye")
    }
}


calculator ()
