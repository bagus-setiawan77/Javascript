setInterval(counter, 1000)

function counter(){
    let time = new Date()
    let hour = time.getHours().toString().padStart(2, "0");
    let minute = time.getMinutes().toString().padStart(2, "0");
    let second = time.getSeconds().toString().padStart(2, "0");

    let minutesC = minute.toString()
    let minuteF = minutesC.padStart(2,"0")

    let currentTime = hour + ":" + minute + ":" + second;

    document.getElementById('dummyTime').innerHTML = currentTime;
}