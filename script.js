let buttons=document.querySelectorAll(".btn");
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



const iswin=()=>{

    for (const element of win) {
        if( buttons[element[0]].innerHTML === buttons[element[1]].innerHTML &&
            buttons[element[1]].innerHTML === buttons[element[2]].innerHTML &&
            (buttons[element[2]].innerHTML === "X" || buttons[element[2]].innerHTML === "O"))
        {
            return true;
        }
    }
    return false;
}

function disable(){
    buttons.forEach(btn => {
        btn.disabled=true;
    });
}

let count=0;

let player=1;
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        count++;
        if(player)
        {
            btn.innerHTML="X";
            btn.style.color="#89043D"
            player=0;
            if(iswin())
            {
                document.querySelector(".player1_win").style.display="block"  ;  
                disable();
            }
        }
        else{
            btn.innerHTML="O";
            btn.style.color="#1C3041"
            player=1;
            if(iswin())
            {
                document.querySelector(".player2_win").style.display="block"  ;  
                disable();
            }
        }
        
        if(count===buttons.length)
        {
            document.querySelector(".tie").style.display="block" ;        
        }

        btn.disabled=true;
    })
})


let restart_btn=document.querySelector(".restart");
restart_btn.addEventListener("click",()=>{
    buttons.forEach(btn => {
        btn.innerHTML="";
        btn.disabled=false;
    });
    document.querySelector(".player1_win").style.display="none"  ;        
    document.querySelector(".player2_win").style.display="none"  ;        
    document.querySelector(".tie").style.display="none"  ;        


})
