const minNum = 1;
const maxNum = 10;
const answer = Math.round(Math.random()* 10);
let attemp = 0;
let guess;
let running = true;

while(running = true){
  
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}: `)
  guess = Number(guess);

  if(isNaN(guess)){
    window.alert('Please enter a valid number');
  }
  else if(guess < minNum || guess > maxNum){
    window.alert('Please enter a valid number');
  }
  else{
    attemp++;
    if(guess < answer){
      window.alert('to low try again');
    }
    else if(guess > answer){
      window.alert('to high try again');
    }
    else{
      window.alert(`you won the answer was ${answer} took a ${attemp} attemp`);
    }
  }
  running = false;
}
