const launchButton = document.getElementById('launchButton');
//let pageRefresh = 0;

launchButton.onclick = function() {

    //clearInterval(pageRefresher);
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
    const eqDay = eqHour * 24;
    const futureTimeTotal = new Date(dateTime).getTime();
    //console.log(futureTimeTotal);

    
    countdownTimer();
    function countdownTimer() {

        let currentTime = new Date().getTime();
    
        let counterTime = futureTimeTotal - currentTime;
        //console.log(counterTime);

        let countSec = Math.floor((counterTime % eqMin) / eqSec);
        //console.log(countSec);
        let countMin = Math.floor((counterTime % eqHour) / eqMin);
        //console.log(countMin);
        let countHour = Math.floor((counterTime % eqDay) / eqHour);
        //console.log(countHour);
        let countDay = Math.floor(counterTime / eqDay);
        //console.log(countDay);
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
        let displayTime = `${countDay} : ${countHour} : ${countMin} : ${countSec}`;
        console.log(displayTime);
        document.getElementById('displayTime').innerHTML = displayTime;


        if (counterTime <= 0) {
            clearInterval(pageRefresher);
            document.getElementById('displayTime').innerHTML = '0 : 0 : 0 : 0';
            document.getElementById('Blastoff').innerHTML = 'Blastoff!'
            document.body.style.backgroundImage = 'url("../images/hV3.gif")';
            document.body.style.height = '100%';
        }

    }
    let pageRefresher = setInterval(countdownTimer, 1000);

}