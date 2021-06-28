//variable
let currentInput    = document.querySelector('.currentInput');
let answerScreen    = document.querySelector('.answerScreen');
let buttons         = document.querySelectorAll('button');
let erasebtn        = document.querySelector('#erase');
let clearbtn        = document.querySelector('#clear');
let evaluate        = document.querySelector('#evaluate');


//Calculator Display
let realTimeScreenValue = []

//To Clear
clearbtn.addEventListener("click", () =>{

    realTimeScreenValue =[''];
    answerScreen.innerHtml = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
})


//Get value of any button clicked and display to the screen
buttons.forEach((btn) =>{

    btn.addEventListener("click", () =>{
        // when clicked button is not erases button
        if (!btn.id.match('erase')){
            //to display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            //to evaluate answer in real time
            if (btn.classList.contains('num_btn')){
                
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        //when erase button is clicked
        if (btn.id.match('erase')){
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        //when clicked button is evaluate button
        if (btn.id.match('evaluate')){
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }


        //to prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0
        }
    })
})
