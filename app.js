let boxes=document.querySelectorAll(".btn");
let msg_btn=document.querySelector(".msg-btn");
let reset_btn=document.querySelector("#reset");
let msg_container=document.querySelector(".msg-container");
let newGame=document.querySelector(".newGame");
let turnO=true;
let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]];
// add event listener to all game button
const disableAllButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableAllButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        turnO=true;
        box.innerText="";
        msg_container.classList.add("hidden");
    }
}
let checkWinner=()=>{
    for(let pattern of winPattern){
        let pasval1=boxes[pattern[0]].innerText;
        let pasval2=boxes[pattern[1]].innerText;
        let pasval3=boxes[pattern[2]].innerText;
        if(pasval1!="" && pasval2!="" && pasval3!=""){
            if(pasval1==pasval2 && pasval2==pasval3){
                msg_btn.innerText=`Congratulation ${pasval1} win the game`;
                msg_container.classList.remove("hidden");
                disableAllButton();
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="white";
        }
        else{
            box.innerText="X";
            box.style.color="black";
            turnO=true;
        }
        box.disabled=true;// disable the button for not click again want yo click same button
        checkWinner()
    });
});

//newgame button
newGame.addEventListener('click',enableAllButton);
reset_btn.addEventListener('click',enableAllButton);