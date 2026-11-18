window.addEventListener("load", function() {
    const countdown = document.getElementById("countdown");
    const duration = document.getElementById("duration");

    let timeLeft = Number(duration.value) * 60;
    let timer;

    const startButton = document.getElementById("start-btn");
    const resetButton = document.getElementById("reset-btn");
    const status = document.getElementById("status");
    const sessionList = document.getElementById("session-list");
    const emptyMessage = document.getElementById("empty-message");
    const clearButton = document.getElementById("clear-btn");

    console.log(timeLeft);
    console.log(countdown.textContent);

    duration.addEventListener("change", function() {
        timeLeft = Number(duration.value) * 60;

        countdown.textContent =
            String(duration.value).padStart(2, "0") + ":00";

        console.log(timeLeft);
    });

    startButton.addEventListener("click", function() {
        status.textContent = "Timer started!";
        startButton.disabled = true;

        timer = setInterval(function() {
            timeLeft = timeLeft - 1;

            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            countdown.textContent =
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");

            if (timeLeft <= 0) {
                clearInterval(timer);
                status.textContent = "Session completed!";
                document.body.style.backgroundColor = "lightgreen";

                const completedTime = new Date();
                const listItem = document.createElement("li");

                listItem.textContent =
                    duration.value + "-minute session completed at " +
                    completedTime.toLocaleTimeString();

                sessionList.appendChild(listItem);
                emptyMessage.remove();
            }
        }, 1000);
    });

    resetButton.addEventListener("click", function() {
        clearInterval(timer);

        timeLeft = Number(duration.value) * 60;

        countdown.textContent =
            String(duration.value).padStart(2, "0") + ":00";

        status.textContent = "Ready to focus?";
        document.body.style.backgroundColor = "antiquewhite";
        startButton.disabled = false;
    });



    clearButton.addEventListener("click", function() {
    while (sessionList.firstChild) {
        sessionList.removeChild(sessionList.firstChild);
    }

    sessionList.parentNode.insertBefore(emptyMessage, sessionList);
});

sessionList.parentNode.insertBefore(emptyMessage, sessionList);


});