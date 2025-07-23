//

// increment conter

const increment = document.getElementById("increment");

console.log(increment);

const result = document.getElementById("id");

let counter = 1;

increment.addEventListener("click", function () {
  console.log("clicking");

  counter = counter + 1;
  result.textContent = counter;
});

console.log("migatha panulu suchuko");

// decrement counter

const decriment = document.getElementById("decrement");

decriment.addEventListener("click", function () {
  if (counter > 0) {
    counter = counter - 1;
  }

  result.textContent = counter;
});

// increment and decriment by10

const incrimentby5 = document.getElementById("incrementby5");
let result2 = document.getElementById("id");
// incrimentby5


incrimentby5.addEventListener("click", function () {
  console.log("clickmeee");
  counter = counter + 5;
  result2.textContent = counter;
});

// decriment by5

const decrimentby5 = document.getElementById("decrementby5");

decrimentby5.addEventListener("click", function(){
   
    if (counter >4){
      counter=counter -5
    }
    

    result2.textContent =counter
    
})

// reset button

 const reset1= document.getElementById("resetbtn")
let result3 = document.getElementById("id");


reset1.addEventListener("click", function(){
     console.log("reset")

      counter=0

      result3.textContent =counter
})

