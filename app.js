let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const showWinner=(userwin,userchoice,compchoice)=>
{
  if(userwin)
  {
    userscore++;
    userscorepara.innerText=userscore;
    console.log("Userwin win");
    msg.innerText = (`You Win! Your ${userchoice}\tbeats\t${compchoice}`); 
    msg.style.backgroundColor="green"; 
  }
  else
  {
    compscore++;
    compscorepara.innerText=compscore;
    console.log("Compwin lose");
    msg.innerText=(`You Lose ${compchoice}\tbeats\t Your ${userchoice}`);
    msg.style.backgroundColor="red"; 
  }
}

const drawgame=()=>{
    console.log("Game is draw");
    msg.innerText = ("Game Draw,Play Again "); 
    msg.style.backgroundColor=" #003249";
}

const gencompchoice=()=>{
    const options=["paper","rock","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}
const playgame=(userchoice)=>{
    console.log("user choice is-",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice is-",compchoice);
    if(userchoice===compchoice)
    {
       drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
          userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
         userwin=compchoice==="scissors"?false:true;
        }
        else
        {
         userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userchoince= choice.getAttribute("id");
        playgame(userchoince);
        

    })
})
