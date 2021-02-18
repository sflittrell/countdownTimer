Countdown Timer Pseudocode

Function:
    A clock that counts down from a given point in time that the user defines.

Objects:
    Header - Title of page
    Input field - user inputs the hour, minuets, and seconds to count down from
    Launch button - button used to start the program and submit the inputs that the user entered into the input field

Variables:
    userHour = the input from the hour section on the html form
    userMin = the input from the minutes section on the html form
    userSec = the input from the seconds section on the html form
    launchButton = look for the user to press the Launch button on the main page and start the program
    displayTime = countdown time to be displayed on the main page
    currentTime = the current date and time
    eqSec = 1000 // multiply by seconds to get total seconds in milliseconds
    eqMin = eqSec * 60 // multiply by minutes to get total minuets in milliseconds
    eqHour = eqMin * 60 // multiply by hours to get total hours in milliseconds

Start Program

    launchButton = on click of button run main function (countdownTimer) that starts the countdown clock

    FUNCTION countdownTimer {

        GET current time and date
        currentTime = Compare current time to JavaScript universal (Jan 1 1970) to get how many milliseconds since that date
        currentTimeTotal = convert userHour, userMin, and userSec to milliseconds (eqSec * userSec + eqMin * userMin + eqHour * userHour) and add it to currentTime // this gets the future time we are counting down to in milliseconds

        counterTime = currentTimeTotal - current time

        countSec = ((currentTimeTotal % eqMin) / eqSec) rounded down to the nearest integer
        countMin = ((currentTimeTotal % eqHour) / eqMin) rounded down to the nearest integer
        countHour = (currentTimeTotal / eqMin) rounded down to the nearest integer

        displayTime = countHour + countMin + countSec
        SEND displayTime to the html page

        SET interval to refresh every second

        IF counterTime = 0
            clear the interval to stop refreshing the page
            ADD BLAST OFF! text

    END Program

    }