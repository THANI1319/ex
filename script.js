const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

/* Button Click Support */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if(value === "C"){
            result.value = "";
        }
        else if(value === "="){
            calculate();
        }
        else{
            result.value += value;
        }
    });
});

/* Keyboard Typing Support */
document.addEventListener("keydown", function(e) {
    const allowedKeys = "0123456789+-*/.%";

    if(allowedKeys.includes(e.key)){
        result.value += e.key;
    }
    else if(e.key === "Enter"){
        calculate();
    }
    else if(e.key === "Backspace"){
        result.value = result.value.slice(0, -1);
    }
    else if(e.key === "Escape"){
        result.value = "";
    }
});

/* Calculation Function */
function calculate(){
    try{
        result.value = eval(result.value);
    }catch{
        result.value = "Error";
    }
}