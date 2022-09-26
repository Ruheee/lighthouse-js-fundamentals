const input = ['north', 'north', 'west', 'west', 'north', 'east','north']; /* array is kind of a list, this isnt in order */ 
const output = [-1, 4]; 

const finalPosition = (moves) => {
  let x = 0;
  let y = 0;

  for(let i= 0 ; i < moves.length; i++){
    if(moves[i] === 'north'/* grabbing north from array (list) */) {
      y++;/* since y starts at 0, its telling the computer to add 1*/
    } else if (moves[i] === 'south') {
      y--;/* calls the array 'south' and minus' it by one*/
    } else if (moves[i] === 'west') {
      x--;
    } else if (moves[i] === 'east') {
      x++;
    }
  }
  
  return [x,y];
};

console.log(finalPosition(input));


/*function finalPosition(moves){
  
  for(var x = 0; x < -5; x--){
    for (var y = 0; y < 5; y++){
      console.log( x + ',' + y)
    }
  }
} */ 
/*            QUESTIONS 

could a nested loop be used to solve this?
why did this solution use a "i" instead of a nested loop? */
