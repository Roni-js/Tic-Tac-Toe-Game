//Get the boxes and reset btn
let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turnO =true; // PlayerX and PlayerO

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBox();
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
if(turnO) {
    box.innerText ="X";
    turnO=false;
} else{
    box.innerText ="O";
    turnO=true;
}
box.disabled=true;
checkWinner();
    });

});
const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
}

const disableBox = () => {
    for(let box of boxs) {
        box.disabled =true;
     }
}
const enableBox = () => {
    for(let box of boxs) {
        box.disabled = false ;
        box.innerText= "" ;
        msgContainer.classList.add("hide") ;
     }
}
const checkWinner = () => {
   for(let pattern of winPatterns){
   let pos1val =boxs[pattern[0]].innerText;
   let pos2val =boxs[pattern[1]].innerText;
   let pos3val =boxs[pattern[2]].innerText;
   if(pos1val != "" && pos2val != "" && pos3val != ""){
   if(pos1val === pos2val && pos2val ===pos3val){
   showWinner(pos1val);
   disableBox()
     }
     }
     }
} 
newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)