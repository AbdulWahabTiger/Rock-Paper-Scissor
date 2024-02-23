 let userScore = 1;
 let compScore = 1;
 
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const user = document.querySelector("#user-score");
 const comp = document.querySelector("#comp-score");

 const gencompchoice = () =>{
    const options = ["paper","rock","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
 };

 const drawGame =() => {
    console.log("Game was Draw");
    msg.innerHTML = "Game was Draw.Play again";
    msg.style.backgroundColor = "blue";
 }
 const showWinner = (userWin) =>{
   if(userWin){
      user.innerHTML=userScore++;
      console.log("You win!",);
      msg.innerHTML = "You Win !";
      msg.style.backgroundColor = "green";
   }
   else{
      comp.innerHTML=compScore++;
      console.log("You Lose!");
      msg.innerHTML = "You Lose !";
      msg.style.backgroundColor = "red";
   }
 };

 const playGame = (userchoice) =>{
    console.log("user choice is ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice is ",compchoice); 

    if(userchoice===compchoice) {
        drawGame();
    } else {
      let userWin;
      if(userchoice==="rock"){
         userWin = compchoice==="paper" ? false : true;
      } else if(userchoice==="paper"){
         userWin = compchoice==="scissors" ? false : true;
      }
      else {
         userWin = compchoice==="rock" ? false : true;
      }
      showWinner(userWin);

    }

 };

 choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("Id");
        playGame(userchoice);


    }) 
 });