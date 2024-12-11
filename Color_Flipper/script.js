

function colorFlipper() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    console.log(r);
    console.log(g);
    console.log(b);
    
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
}
