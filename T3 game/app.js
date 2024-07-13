let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; 
const winpattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            //player-O
            box.innerText="O";
            turnO=false;
        }else{
            //player-X
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const disabledBox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();

}

const checkWinner=()=>{
    for(let pattern of winpattern){
    let posVal1=boxes[pattern[0]].innerText;
    let posVal2=boxes[pattern[1]].innerText;
    let posVal3=boxes[pattern[2]].innerText;
    if(posVal1 !=""&& posVal2 !="" && posVal3 !=""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            console.log("winner:-",posVal1)
            showWinner(posVal1);
        }
    }
}
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
