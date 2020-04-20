// adding needed variables;
const keyboradSec = document.getElementById("qwerty");
const phraseDisplay = document.getElementById("phrase");
const btnReset = document.querySelector(".btn_reset");
const overlay = document.getElementById("overlay");
let title = document.querySelector(".title");
let geussCount = 0;
let phrases = [
    "taking a walk",
    "no coronavarius",
    "enjoy the gym",
    "watering a garden",
    "washing my clothes",
    "riding motorcycle",
 ];

//  events handler to hide the star screem overlay;
btnReset.addEventListener("click",()=>{
    overlay.style.display = "none";
})


// create getRandomPhraseAsArray function 
// let randomIndex = Math.floor(Math.random() * phrases.length);
// let randomPhrase = phrases[randomIndex];
// let phraseArray = randomPhrase.split("");
// console.log(phraseArray);
function getRandomPhraseAsArray(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomIndex];
    let phraseArray = randomPhrase.split("");
    return phraseArray;
}

// function to display list characters
// for(let i = 0; i < arrayPhrases.length; i ++){
//      let li = document.createElement("li");
//      li.textContent = arrayPhrases[i];
//      if(li.textContent === " "){
//          li.className = "";
//      }else{
//         li.className = "letter";
//      }
//      phraseDisplay.appendChild(li);
// }
function addPhraseToDisplay(arr){
    let ul = phraseDisplay.querySelector("ul")
    for(let i = 0; i < arr.length; i ++){
        let li = document.createElement("li")
        li.textContent = arr[i];
        if(li.textContent === " "){
            li.className = "";
        }else{
            li.className = "letter";
        }
        ul.appendChild(li);
    }
}
let arrayPhrases = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(arrayPhrases);




// Andding Eevent Listerner to the keyboard on screem
keyboradSec.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.classList.add("chosen");
        e.target.disabled = true;
        let choseLetter = e.target.textContent;
        let letters = document.querySelectorAll(".letter");
        // let letterFound;
        // let letter = document.querySelectorAll(".letter");
        // let choseLetter = e.target.textContent;
        // for(let i = 0; i < letter.length; i ++){
        //     if(choseLetter === letter[i].textContent){
        //       letter[i].classList.add("show");
        //       letterFound = letter[i].textContent;
        //     }
        // }
//function of checkletter to check and add class show to the list
        function checkLetter(arr){
            let letterFound;
            for(let i = 0; i < letters.length; i ++){
                if(arr === letters[i].textContent){
                    letters[i].classList.add("show");
                    letterFound = letters[i].textContent;
                }
            }
            return letterFound;
        };
/* 
adding a statement that is going remove the tries class when the guesses is wrong
and add  a counter by one with the letter is undefined;
*/
        if(checkLetter(choseLetter) === undefined){
            let ol = document.querySelector("ol"); 
            let li = ol.firstElementChild;
            ol.removeChild(li);
            geussCount += 1;
        }else{
            checkLetter(choseLetter);
        }
 /* 
Adding a statement the is going to check the states of the user guess,if the user guess right,or
the guesser loose all of it's five points.that is checkwin function.
*/
    // let classShow = document.querySelectorAll(".show");
    // let letterLength = letters.length;
    // let showLenth = classShow.length;

    // if(letterLength === showLenth){
    //     overlay.classList.add("win");
    //     overlay.style.display = "";
    //     title.textContent = "You Win The Guess!! Yeah!!!";
    //     btnReset.setAttribute("onClick","window.location.reload()")
    //     btnReset.textContent = "Start Over";
    // }else if(geussCount >= 5){
    //     overlay.classList.add("lose");
    //     overlay.style.display = "";
    //     title.textContent = "O,Sorry,Try It One More Time..";
    //     btnReset.setAttribute("onClick","window.location.reload()")
    //     btnReset.textContent = "Try One More Time";
    // }

    function checkWin(arr){
        let classShow = document.querySelectorAll(".show");
        let letterLength = letters.length;
        let showLenth = classShow.length;
        if(letterLength === showLenth){
            arr.classList.add("win");
            arr.style.display = "";
            title.textContent = "You Win The Guess!! Yeah!!!";
            btnReset.setAttribute("onClick","window.location.reload()");
            btnReset.textContent = "Start Over";
        }else if(geussCount >= 5){
            arr.classList.add("lose");
            arr.style.display = "";
            title.textContent = "O,Sorry,Try It One More Time..";
            btnReset.setAttribute("onClick","window.location.reload()");
            btnReset.textContent = "Try One More Time";
        }
    }
    checkWin(overlay);
    }
})













