function test1(player1,player2){

let results = '';

   if (player1 === player2){
    results = 'TIE!';
    return results;
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
    results ='Player 2 wins!';
    return results;
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
    results = 'Player 2 wins!';
    return results;
   }
   
   if (player1 === 'scissors' && player2 === 'rock '){
    results = 'Player 2 wins!';
    return results;
   }

   if (player1 === 'paper' && player2 === 'rock'){
    results = 'Player 1 wins!';
    return results;
   }
 
   return results;
 }

 module.exports = test1;