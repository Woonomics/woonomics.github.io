var Pchoice;
var AIchoice;
var myArray = ['rock', 'paper', 'scissors'];



function Prock() {
    Pchoice = "rock";
    GameStart();
}

function Ppaper() {
    Pchoice = "paper";
    GameStart();
}

function Pscissors() {
    Pchoice = "scissors";
    GameStart();
}

var cP;
var cCPU;

function GameStart() {


    switch (Pchoice) {
        
        case "rock":
            document.getElementById("rpsplayer").innerHTML = "You choosed rock.";
            cP = 1;
        break;
        
        case "paper":
            document.getElementById("rpsplayer").innerHTML = "You choosed paper.";
            cP = 2;
        break;
        
        case "scissors":
            document.getElementById("rpsplayer").innerHTML = "You choosed scissors.";
            cP = 3;
        break;
      }

    
    var AIchoice = myArray[Math.floor(Math.random() * myArray.length)];
    

    switch (AIchoice) {
        
        case "rock":
            document.getElementById("rpscpu").innerHTML = "The computer choosed rock!";
            cCPU = 1;
        break;
        
        case "paper":
            document.getElementById("rpscpu").innerHTML = "The computer choosed paper!";
            cCPU = 2;
        break;
        
        case "scissors":
            document.getElementById("rpscpu").innerHTML = "The computer choosed scissors!";
            cCPU = 3;
        break;
    }

GameScore();
console.log(Pchoice, AIchoice);
console.log(cP, cCPU);

document.getElementById("scoretable").style.display = "block";

}



var player_score = 0;
var enemy_score = 0;


function GameScore(){
    if (cP == cCPU) {
        document.getElementById("rpsscore").innerHTML = "It's a Tie!";
    }
    else {

    switch(cP){
        case 1:
        switch(cCPU){
            
            case 2:
                document.getElementById("rpsscore").innerHTML = "You lose!";
                enemy_score = enemy_score + 1;
            break;

            case 3:
                document.getElementById("rpsscore").innerHTML = "You win!";
                player_score = player_score + 1;
            break;
        }
        break;
        
        case 2:
        switch(cCPU){
            
            case 3:
                document.getElementById("rpsscore").innerHTML = "You lose!";
                enemy_score = enemy_score + 1;
            break;

            case 1:
                document.getElementById("rpsscore").innerHTML = "You win!";
                player_score = player_score + 1;
            break;
        }
        break;

        case 3:
        switch(cCPU){
            
            case 1:
                document.getElementById("rpsscore").innerHTML = "You lose!";
                enemy_score = enemy_score + 1;
            break;

            case 2:
                document.getElementById("rpsscore").innerHTML = "You win!";
                player_score = player_score + 1;
            break;
        }
        break;
        
        
        default:
            document.getElementById("rpsscore").innerHTML = "Something is wrong";
        break;
        }
    }


document.getElementById("pscore").innerHTML = player_score;
document.getElementById("cpuscore").innerHTML = enemy_score;

}
