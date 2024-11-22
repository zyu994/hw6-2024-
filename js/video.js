var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
    video = document.getElementById("player1");

    video.autoplay = false;
    video.loop = false;

    video.volume = 1.0;

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down Video");
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up Video");
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead Video");
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time is " + video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            document.querySelector("#mute").innerHTML = "Mute";
        } else {
            video.muted = true;
            document.querySelector("#mute").innerHTML = "Unmute";
        }
    });

    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

