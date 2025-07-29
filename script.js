let number = document.querySelectorAll(".number");
let display = document.querySelector(".display");

let currentInput = "";

for (const num of number) {
    num.addEventListener("click",function(){
        currentInput  += num.innerText;
        display.innerText = currentInput
    })
}

let operator = document.querySelectorAll(".operator");

for (const op of operator) {
    op.addEventListener("click",function(){
        let lastChar = currentInput.slice(-1);
        if('+-*/'.includes(lastChar)){return}
        currentInput += op.innerText;
        display.innerText = currentInput
    })
}

let clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
    display.innerText = "";
    currentInput = "";
})

let del = document.querySelector(".del");
del.addEventListener("click",function(){
    display.innerText = display.innerText.slice(0, -1)
     currentInput = currentInput.slice(0, -1);
})

let equal = document.querySelector(".equal");
equal.addEventListener("click",function(){

    try {
        if(currentInput.trim() !== ""){
        display.innerText = eval(currentInput)
        currentInput = display.innerText;
        }

    } catch (error) {
        display.innerText = "error"
    }
})