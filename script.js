const player = function(name , marker){
    return {
        name ,
        marker
    };
}

const player1 = player('player1' , 'x');
const player2 = player('player2' , 'o');


const box_zero = document.querySelector('.zero');
const box_one = document.querySelector('.one');
const box_two = document.querySelector('.two');
const box_three = document.querySelector('.three');
const box_four = document.querySelector('.four');
const box_five = document.querySelector('.five');
const box_six = document.querySelector('.six');
const box_seven = document.querySelector('.seven');
const box_eight = document.querySelector('.eight');

const array = [box_zero,box_one,box_two,box_three,box_four,box_five,box_six,box_seven,box_eight];


const gameBoard = (() => {

   /*0 1 2
     3 4 5
     6 7 8*/
   
  const winCondition = () => {
            if( array[0].textContent === player1.marker && array[1].textContent === player1.marker && array[2].textContent === player1.marker ||
                array[0].textContent === player1.marker && array[3].textContent === player1.marker && array[6].textContent === player1.marker ||
                array[0].textContent === player1.marker && array[4].textContent === player1.marker && array[8].textContent === player1.marker ||
                array[1].textContent === player1.marker && array[4].textContent === player1.marker && array[7].textContent === player1.marker ||
                array[2].textContent === player1.marker && array[5].textContent === player1.marker && array[8].textContent === player1.marker ||
                array[2].textContent === player1.marker && array[4].textContent === player1.marker && array[6].textContent === player1.marker ||
                array[3].textContent === player1.marker && array[4].textContent === player1.marker && array[5].textContent === player1.marker ||
                array[6].textContent === player1.marker && array[7].textContent === player1.marker && array[8].textContent === player1.marker ){
               
                    alert("Game Over. Player1 win!!");

                }
            else if( array[0].textContent === player2.marker && array[1].textContent === player2.marker && array[2].textContent === player2.marker ||
                     array[0].textContent === player2.marker && array[3].textContent === player2.marker && array[6].textContent === player2.marker ||
                     array[0].textContent === player2.marker && array[4].textContent === player2.marker && array[8].textContent === player2.marker ||
                     array[1].textContent === player2.marker && array[4].textContent === player2.marker && array[7].textContent === player2.marker ||
                     array[2].textContent === player2.marker && array[5].textContent === player2.marker && array[8].textContent === player2.marker ||
                     array[2].textContent === player2.marker && array[4].textContent === player2.marker && array[6].textContent === player2.marker ||
                     array[3].textContent === player2.marker && array[4].textContent === player2.marker && array[5].textContent === player2.marker ||
                     array[6].textContent === player2.marker && array[7].textContent === player2.marker && array[8].textContent === player2.marker ){
               
                    alert("Game Over. Player2 win!!");

                    }
            else if(array.every(item => item.textContent !== '')){
                    alert('Game tied!!');
                 
            }

    }
   
    return {winCondition};

})();


(function updateDisplay(){

    let current_player = player1;

    box_zero.addEventListener('click',() => {
        if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_zero.textContent === ''){
                if(current_player === player1){
                    box_zero.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_zero.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
     })

     box_one.addEventListener('click',() => {
       if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_one.textContent === ''){
                if(current_player === player1){
                    box_one.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_one.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
       
        
     })

     box_two.addEventListener('click',() => {
       if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_two.textContent === ''){
                if(current_player === player1){
                    box_two.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_two.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
       
        
     })

     box_three.addEventListener('click',() => {
      
        if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_three.textContent === ''){
                if(current_player === player1){
                    box_three.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_three.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
        
     })

     box_four.addEventListener('click',() => {
       if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_four.textContent === ''){
                if(current_player === player1){
                    box_four.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_four.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
       
        
     })

     box_five.addEventListener('click',() => {
       if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_five.textContent === ''){
                if(current_player === player1){
                    box_five.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_five.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
       
        
     })

     box_six.addEventListener('click',() => {
       if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_six.textContent === ''){
                if(current_player === player1){
                    box_six.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_six.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
        
     })

     box_seven.addEventListener('click',() => {
      
        if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_seven.textContent === ''){
                if(current_player === player1){
                    box_seven.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_seven.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        gameBoard.winCondition();   
    
        
     })

     box_eight.addEventListener('click',() => {
      
        if(array.every(item => item.textContent !== '')){
            gameBoard.winCondition();
        }
        else{
            if(box_eight.textContent === ''){
                if(current_player === player1){
                    box_eight.textContent = current_player.marker;
                    current_player = player2;
                }
                else{
                    box_eight.textContent = current_player.marker;
                    current_player = player1;
                }
            }
            else{
                alert('already marked this box');
            }
        }

        return gameBoard.winCondition();   
    
        
     })
})();


