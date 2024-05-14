const buttons = document.querySelectorAll("button");
const inputValue = document.querySelector("span")

let counter =0;

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList[0] === "increment"){
            counter++
            inputValue.innerHTML = counter;
        } else if(event.target.classList[0] === "decrement"){
            counter--
            inputValue.innerHTML = counter;
        }
        
        if(counter>0){
            inputValue.style.color="purple"
        }else if(counter<0){
            inputValue.style.color="red"
        }else{
            inputValue.style.color="black"
        }
    })
})