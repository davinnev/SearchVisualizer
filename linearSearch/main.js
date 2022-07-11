let i = 0;
let form = document.querySelector("form");
let numbers = document.querySelectorAll(".number");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    var numberToFind = document.querySelector("input").value;
    
    let linearSearchVisualizer = setInterval(function search(){
        
        if (i < 10){
            console.log(`is ${i+1} equals to ${numberToFind}?`)
            numbers[i].classList.add("comparing");
            console.log(numbers[i]);
            if(numbers[i].innerHTML == numberToFind){
                console.log('found');
                numbers[i].classList.add("found");
            }
            i++;
        }
        else{
            i = 0;
            clearInterval(linearSearchVisualizer);
        }
    }
    , 1000)
    


});


/*
*/