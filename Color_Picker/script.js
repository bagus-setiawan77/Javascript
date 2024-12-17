let colorInput = document.getElementById('color');
let hexInput = document.getElementById('hex');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color
})