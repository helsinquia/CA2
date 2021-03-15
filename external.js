function validateForm(){
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
   /*username not empty validation with error message*/
    if(username ==null || username == ""){
        alert("Please enter a valid username")
        return false;
    }
    /* validation of password length with error message
        password must be 9 characters in length
        */
    if(password.length !=9){ 
        alert("Password must be 9 characters long.")
        return false;
    }
}


/*validation: Number of burgers entered is numeric with error message*/
/* https://www.geeksforgeeks.org/number-validation-in-javascript/
https://www.w3schools.com/jsref/jsref_isnan.asp*/

function validateNumber(){
    var num = document.forms["burgerForm"]["quantity"].value;
    if (isNaN(num)|| num ==null || num == "") { /*isNan() function check whether passed variable is number or not*/
        alert("Please enter a valid quantity")
        return false;
    } 
}

/*condition: 10% discount code*/
function discount(price){
    var discount_code = document.forms["burgerForm"]["discount_code"].value;

    if(discount_code =="tacotopping"){
        price = price - (price * 0.10)
    }
    return price
}

function popUp(){
    $("#supersized").dialog();
}
 
/*condition/Calculation: Total
The burgers cost: Large=7 euro, Extra-Large=9 Euro, Supersize=17.50 Euro!
*/
function calculateTotal(){
    var total = 0
    var size = document.forms["burgerForm"]["size"].value;
    validateNumber()
    var quantity = document.forms["burgerForm"]["quantity"].value;

    if(size =="large")
        total = 7 * quantity;
    else if(size == "extra_large")
        total = 9 * quantity;
    else if (size == "supersize"){
        total = 17.50 * quantity;
        popUp();
    }
        

    total = discount(total)

    document.getElementById("total").value = total;
}
