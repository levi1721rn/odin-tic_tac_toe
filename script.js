const player = function(name , marker){
    return {
        name ,
        marker
    };
}

const player1 = player('player1' , 'x');
const player2 = player('player2' , 'o');

const gameBoard = (() => {
   const array = ['','','','','','','','',''];

   /*0 1 2
     3 4 5
     6 7 8*/
   
  const winCondition = () => {
            if( array[0] === player1.marker && array[1] === player1.marker && array[2] === player1.marker ||
                array[0] === player1.marker && array[3] === player1.marker && array[6] === player1.marker ||
                array[0] === player1.marker && array[4] === player1.marker && array[8] === player1.marker ||
                array[1] === player1.marker && array[4] === player1.marker && array[7] === player1.marker ||
                array[2] === player1.marker && array[5] === player1.marker && array[8] === player1.marker ||
                array[2] === player1.marker && array[4] === player1.marker && array[6] === player1.marker ||
                array[3] === player1.marker && array[4] === player1.marker && array[5] === player1.marker ||
                array[6] === player1.marker && array[7] === player1.marker && array[8] === player1.marker ){
               
                    console.log("Game Over");
                    console.log("Player1 win");

                }
            else if( array[0] === player2.marker && array[1] === player2.marker && array[2] === player2.marker ||
                array[0] === player2.marker && array[3] === player2.marker && array[6] === player2.marker ||
                array[0] === player2.marker && array[4] === player2.marker && array[8] === player2.marker ||
                array[1] === player2.marker && array[4] === player2.marker && array[7] === player2.marker ||
                array[2] === player2.marker && array[5] === player2.marker && array[8] === player2.marker ||
                array[2] === player2.marker && array[4] === player2.marker && array[6] === player2.marker ||
                array[3] === player2.marker && array[4] === player2.marker && array[5] === player2.marker ||
                array[6] === player2.marker && array[7] === player2.marker && array[8] === player2.marker ){
               
                    console.log("Game Over");
                    console.log("Player2 win");

                    }
            else if(array.every(item => item !== '')){
                console.log("game over.");
                console.log("game tied.");
            }

    }

   const addMarker = (player , index) => {
    if(array.every(item => item !== '')){
        return;
    }
    else{
      if(array[index] === ''){
        if(player === player1){
            array[index] = 'x';
        }
        else{
            array[index] = 'o';
        }
      }
      else{
          return;
      }
      winCondition();
    }
   }
   
   return {addMarker};

})();


