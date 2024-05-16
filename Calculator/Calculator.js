function displayVal(val){

    document.getElementById("display").value = document.getElementById("display").value+val;
    //In this function we get the input box value = number value. The parameter "val" denotes the button value
    
}

    

function clearDisplayVal(){
    document.getElementById("display").value = "";
}
// In this function if we click clear button it clear the display. For that we used "" Empty double couts.

function calculate(){

    var input = document.getElementById("display").value // Get the value entered into the display
    var result = eval(input) // Evaluate the mathematical expression using JavaScript's eval() function
 
    document.getElementById("display").value = result; // Display the result in the calculator's display
}

function isNumericKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43 && charCode !== 45 && charCode !== 42 && charCode !== 47 && charCode !== 46) {
        return false;
    }
    return true;  
} //This function is used to allow arithmetic operators and numbers only in the input field.