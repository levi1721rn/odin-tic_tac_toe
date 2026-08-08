const player = function(name , marker){
    return {
        name ,
        marker
    };
}


const result = document.createElement('div');
document.body.append(result);

result.style.height = '75px';
result.style.width = '200px';
result.style.border = '2px solid black';
result.style.margin = "3rem";
result.style.padding = "0.1rem";
result.style.color = "green";

const form = document.querySelector("form");
const player_one = document.querySelector("#player1");
const player_two = document.querySelector("#player2");

form.addEventListener('submit',(event) => {
    event.preventDefault();

    updateDisplay(player_one.value , player_two.value);
    
})


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




function updateDisplay(player1_name , player2_name){

    const player1 = player(player1_name , 'x');
    const player2 = player(player2_name , 'o');

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
               
                    result.textContent = `Game Over. ${player1.name} win!!`;

                }
            else if( array[0].textContent === player2.marker && array[1].textContent === player2.marker && array[2].textContent === player2.marker ||
                     array[0].textContent === player2.marker && array[3].textContent === player2.marker && array[6].textContent === player2.marker ||
                     array[0].textContent === player2.marker && array[4].textContent === player2.marker && array[8].textContent === player2.marker ||
                     array[1].textContent === player2.marker && array[4].textContent === player2.marker && array[7].textContent === player2.marker ||
                     array[2].textContent === player2.marker && array[5].textContent === player2.marker && array[8].textContent === player2.marker ||
                     array[2].textContent === player2.marker && array[4].textContent === player2.marker && array[6].textContent === player2.marker ||
                     array[3].textContent === player2.marker && array[4].textContent === player2.marker && array[5].textContent === player2.marker ||
                     array[6].textContent === player2.marker && array[7].textContent === player2.marker && array[8].textContent === player2.marker ){
               
                    result.textContent = `Game Over. ${player2.name} win!!`;

                    }
            else if(array.every(item => item.textContent !== '')){
                    result.textContent = 'Game tied!!';
                 
            }

    }
   
    return {winCondition};

    })();

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
};

const start_button = document.createElement('button');
start_button.textContent = 'RESTART';
document.body.append(start_button);
start_button.addEventListener('click' , () => {

    location.reload();
    
})