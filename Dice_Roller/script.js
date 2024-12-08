
function rollDice(){
  const numberDice = document.getElementById("numberDice").value;
  const diceResult = document.getElementById("diceResult");

  const values = []

  for( let i = 0; i < numberDice; i++){
    const value = Math.floor(Math.random() * 6) + 1
    values.push(value)
  }
  
  diceResult.textContent = `your dice is ${values.join(' ')}`
}