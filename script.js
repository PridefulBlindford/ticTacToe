function player(name,playerNumber){
    
    let marker;
    if(playerNumber===1){
        marker="x";
    }
    else{
        marker="o";
    }
    return {name,marker};
}
const gameBoard=(function(){
    let board=["","","","","","","","",""];
    let updateBoard=(marker,boardSpace)=>{
        board[boardSpace]=marker;
        
        
    }
    let checkEmptySpace=(boardSpace)=>{
        if(board[board.space]===0){
            return true;
        }
        else{
            return false;
        }
    }
    

    
    let checkBoardFull=()=>{
        for(let i=0;i<board.length;i++){
            if(board[i].length===0){
                return false;
            }

        }
        return true;
    }
    let checkPlayerWon=function(playerMarker){
        if(board[0]===playerMarker&&board[1]===playerMarker&&board[2]===playerMarker){
            return true;
        }
        else if(board[3]===playerMarker&&board[4]===playerMarker&&board[5]===playerMarker){
            return true;
        }
        else if(board[6]===playerMarker&&board[7]===playerMarker&&board[8]===playerMarker){
            return true;
        }
        else if(board[0]===playerMarker&&board[3]===playerMarker&&board[6]===playerMarker){
            return true;
        }
        else if(board[1]===playerMarker&&board[4]===playerMarker&&board[7]===playerMarker){
            return true;
        }
        else if(board[2]===playerMarker&&board[5]===playerMarker&&board[8]===playerMarker){
            return true;
        }
        else if(board[0]===playerMarker&&board[4]===playerMarker&&board[8]===playerMarker){
            return true;
        }
        else if(board[2]===playerMarker&&board[4]===playerMarker&&board[6]===playerMarker){
            return TextTrackCue;
        }
        else{
            return false;
        }
    }
    let restartBoard=()=>{
        board=["","","","","","","","",""]
        return board;
    }
    return {board,updateBoard,checkPlayerWon,restartBoard,checkEmptySpace,checkBoardFull};
});
let playGame=(function(firstPlayerName,secondPlayerName,firstPlayerMarker,secondPlayerMarker){
    let ticBoard=gameBoard();
    let currentPlayerName=firstPlayerName;
    let currentPlayerMarker=firstPlayerMarker;
    let playTurn=()=>{
        let playerInput;
        
        do{
            playerInput=parseInt(prompt(`${firstPlayerName}, please enter in a space from 1 (top left) to 9 (bottom right)`,""));
            if(!ticBoard.checkEmptySpace(playerInput-1)){
                alert("There is already something there. Please try again by putting something in an empty space.");
            }
            
        }while(!ticBoard.checkEmptySpace(playerInput-1));
        ticBoard.updateBoard(currentPlayerMarker,playerInput-1);
            

        
    }
    let checkGameOver=()=>{
        if(ticBoard.checkPlayerWon(firstPlayerMarker)||ticBoard.checkPlayerWon(secondPlayerMarker)){
            return 1;
        }
        else if(ticBoard.checkBoardFull()){
            return 0;
        }
        else{
            return -1;
        }
    }
    let finishGame=()=>{
        if(ticBoard.checkPlayerWon(firstPlayerMarker)){
            return `${firstPlayerName} has won the game!`;
    

        }
        else if(ticBoard.checkPlayerWon(secondPlayerMarker)){
            return `${secondPlayerName} has won the game!`;
        
        }
        else{
            return "It is a tie!";
    
        }
    }
    let playRound=(boardSpace)=>{
        ticBoard.updateBoard(currentPlayerMarker,boardSpace);
        if(currentPlayerName===firstPlayerName){
            currentPlayerName=secondPlayerName;
            currentPlayerMarker=secondPlayerMarker;
        }
        else{
            currentPlayerName=firstPlayerName;
            currentPlayerMarker=firstPlayerMarker;
        }
    }
        
        

        
    return {playTurn,finishGame,playRound,checkGameOver,ticBoard,currentPlayerMarker};


})
let displayGame=(()=>{
    let firstPlayerInput=player("bob",1);
    let secondPlayerInput=player("Rob",2);
    let nameEntryButton=document.querySelector(".name-entry-button");
    let nameEntryForm=document.querySelector(".name-entry-form");
    let nameEntryDialog=document.querySelector("dialog");
    nameEntryButton.addEventListener("click",(event)=>{
        event.preventDefault();
        let nameData=new FormData(nameEntryForm);
        firstPlayerInput.name=nameData.get("first-name");
        secondPlayerInput.name=nameData.get("second-name");
        nameEntryDialog.close();
        

        
    });
    
    let newGame=playGame(firstPlayerInput.name,secondPlayerInput.name,firstPlayerInput.marker,secondPlayerInput.marker);
    let restartGameButton=document.querySelector(".restart-game");
    let spaces=Array.from(document.querySelectorAll(".space"));
    restartGameButton.addEventListener("click",()=>{
        for(let i=0;i<spaces.length;i++){
            spaces[i].innerText="empty";
        }

    });
    let gameResultArea=document.querySelector(".game-result");
    let addGameResult=()=>{
        let gameDisplay=document.createElement("h2");
        gameDisplay.innerText=newGame.finishGame();
        gameResultArea.appendChild(gameDisplay);
    
    }
    spaces.forEach((space)=>{
        space.addEventListener("click",()=>{
            let currentSpace=space.getAttribute("id");
            if(space.innerText==="x"||space.innerText==="o"){
                alert("You can't play there. Try putting your marker on a space that is empty.");
            }
            
            else{

                newGame.playRound(currentSpace-1);
                space.innerText=newGame.ticBoard.board[currentSpace-1];
            
                if(newGame.checkGameOver()!==-1){
                    addGameResult();

                }
            }
        });
    });

});
displayGame();