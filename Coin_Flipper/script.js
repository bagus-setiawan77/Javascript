const img = document.getElementById('img');
const result = document.getElementById('result');

function flip(){
    const ratio = Math.random() * 1
    const faceCoin = ratio < 0.5 ? 'Heads' : 'Tails';
    const imgCoin = faceCoin === 'Heads' ? 
    img.src = 'Head.jpg' :
    img.src = 'Tails.jpg';
    result.textContent = faceCoin;

}