const launchButton = document.getElementById('launchButton');

launchButton.onclick = function() {

    document.getElementById('Blastoff').innerHTML = ''
    let userDate = document.getElementById('launchDate').value;
    let userTime = document.getElementById('launchTime').value;
    //console.log(userDate);
    //console.log(userTime);
    let dateTime = userDate + 'T' + userTime;
    //console.log(dateTime);
    const eqSec = 1000;
    const eqMin = eqSec * 60;
    const eqHour = eqMin * 60;

    const startTime = new Date().getTime();
    //console.log(startTime);
    //console.log(new Date());

    const futureTimeTotal = new Date(dateTime).getTime();
    //console.log(futureTimeTotal);

    let pageRefresher = setInterval(countdownTimer, 1000);

    function countdownTimer() {

        let currentTime = new Date().getTime();
    
        let counterTime = futureTimeTotal - currentTime;
        //console.log(counterTime);

        let countSec = Math.floor((counterTime % eqMin) / eqSec);
        //console.log(countSec);
        let countMin = Math.floor((counterTime % eqHour) / eqMin);
        //console.log(countMin);
        let countHour = Math.floor(counterTime / eqHour);
        //console.log(countHour);
/*
        if (countSec < 10) {
            countSec = "0" + countSec;
        }
        if (countMin < 10) {
            countSec = "0" + countMin;
        }
        if (countHour < 10) {
            countHour = "0" + countHour;
        }
*/
        let displayTime = `${countHour}:${countMin}:${countSec}`;
        //console.log(displayTime);
        document.getElementById('displayTime').innerHTML = displayTime;

        if (counterTime <= 0) {
            clearInterval(pageRefresher);
            let displayTime = "00:00:00";
            document.getElementById('Blastoff').innerHTML = 'Blastoff!'
        }
    }
    countdownTimer();
}