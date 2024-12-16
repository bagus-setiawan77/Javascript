const gradientBox = document.getElementById('gradientBox');
const selectMenu = document.getElementById('selectMenu');

const getRandomColor = () =>{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`
}

alert(getRandomColor)