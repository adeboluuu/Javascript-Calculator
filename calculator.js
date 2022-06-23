

var operator =prompt("Enter your Operator,+,-,/,*" );

var number1=prompt("Number 1"); 

var number2 =prompt("Number 2");

if (operator =="-"){
    let a=(Number(number1-number2)) 
    alert ("Your result is "+ a);
}

else if (operator=="*"){
    alert("Your result is "+ number1*number2);
}

else if (operator=="+"){
    let c =(Number(number1)+Number(number2));
    alert("Your result is "+ c);
    
}

else if (operator=="/"){
    let d =(Number(number1)/Number(number2))
    alert("Your result is "+ d);
}

else{
        alert("Operator is incorrect.Enter appropriate operator");
    }


