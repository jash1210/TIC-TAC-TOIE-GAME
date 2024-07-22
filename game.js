let boxes= document.querySelectorAll(".box")
let reset= document.querySelector("#reset-btn")
let newgamebtn= document.querySelector("#new-btn")
let msgcontainer= document.querySelector(".msg-container ") 
let msg= document.querySelector("#msg")

let turnO = true; //playerX, playerY

let winpettern = [
 [0,1,2] ,
 [0,3,6] ,
 [0,4,8] ,
 [1,4,7] ,
 [2,5,8] ,
 [2,4,6] ,
 [3,4,5] ,
 [6,7,5] ,
];

const resetgame = () => {
    turnO = true;
    enabledbuoxes ();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText ="O";
            turnO =false;
        } else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;
        chkeckwinner ();
        });  
    });

        const disabledbuoxes = () => {
            for(let box of boxes) {
                box.disabled =true;
            }
        }

        const enabledbuoxes = () => {
            for(let box of boxes) {
                box.disabled =false;
                box.innerText ="";
            }
        }

        const showwinner = (winner) => {
            msg.innerText=`congratulation,winner is ${winner}`;
            msgcontainer.classList.remove("hide")
            disabledbuoxes ();
        }

    const chkeckwinner = () => {
        for(let pettern of winpettern){
          let pos1val = boxes[pettern[0]].innerText;
            let pos2val = boxes[pettern[1]].innerText;
            let pos3val = boxes[pettern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner" , pos1val);
                    showwinner (pos1val);
                }
            }
        }
    };

    newgamebtn.addEventListener("click" , resetgame);
    reset.addEventListener("click" , resetgame);