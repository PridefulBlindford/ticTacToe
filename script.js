function player(name,playerNumber){
    let name=name;
    let marker=playerNumber===1?"x":"o";
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
        else if(board[0]===plyaerMarker&&board[4]===playerMarker&&board[8]===playerMarker){
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
        return board;;
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
        if(plticBoard.playerWon(firstPlayerMarker)||ticBoard.playerWon(secondPlayerMarker)){
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
        if(playerWon(firstPlayerMarker)){
            alert(`${firstPlayerName} has won the game!`);
            ticBoard.restartBoard();

        }
        else if(ticBoard.pyarWon(secondPlayerMarker)){
            alert(`${secondPlayerName} has won the game!`);
            ticBoard.restartBoard();
        }
        else{
            alert("It is a tie!");
            ticBoard.restartBoard();
        }
    }
    let playRound=()=>{
        let gameOver=false;
        do{
            playTurn();
            currentPlayerName=currentPlayerName===firstPlayerName?currentPlayerName=secondPlayerName:currentPlayerName=firstPlayerName;
            currentPlayerMarker=currentPlayerMarker===firstPlayerMarker?currentPlayerMarker=secondPlayerMarker:currentPlayerMarker=firstPlayerMarker;
        }while(checkGameOver===-1);
        finishGame();
    }
    return {playTurn,finishGame,playRound,checkGameOver};


})