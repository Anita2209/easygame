let uscore=0;
let cscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg1");
const yc=document.querySelector("#user-score");
const Cc=document.querySelector("#comp-score");
const log = document.querySelector("#log");
const compchoice=()=>{
    const options=["rock","scissor","paper"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="DRAW! PLAY AGAIN.";
}
const showWinner =(uwin)=>{
    if(uwin){
        uscore++;
        yc.innerText=uscore;
        // console.log("you win");
        msg.innerText="YOU WIN!!!!!!!!";
    }
    else{
        cscore++;
        Cc.innerText=cscore;
        // console.log("you lose");
        msg.innerText="YOU LOSE :(";
    }
}
const playGame=(userchoice)=>{
     clearLog();
     console.log("user choice=",userchoice);
     logMessage("YOU=" + userchoice);
     const compc=compchoice();
     console.log("comp choice=",compc);
     logMessage("COMP=" + compc);


     if(userchoice === compc){
        drawGame();
     }
      else{
        let uwin=true;
        if(userchoice==="rock"){
            uwin=compc==="paper" ? false:true;
        }
      else if(userchoice==="paper"){
        uwin=compc==="scissor" ? false:true;
      }
      else{
        uwin=compc==="rock" ? false:true;
      }
      showWinner(uwin);
    }
};
const logMessage = (message) => {
    log.innerText += message + "\n";
}
const clearLog = () => {
    log.innerText = "";
}
 choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
    //    console.log("choice was clicked",userchoice);
       playGame(userchoice);
    })
 })
