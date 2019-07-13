function countdown() {
    var setTime = new Date("June 29, 2019 00:00:00");
    var Time = new Date();
    var leftTime = setTime.getTime() - Time.getTime();
    var days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    var rdays = leftTime / 1000 / 60 / 60 / 24;
    if (rdays >= 1) {
        document.getElementById("releaseTime").innerHTML = days + " day(s) left until a new video releases.";
    } else if (rdays >= -0.5) {
        document.getElementById("releaseTime").innerHTML = "A new video will get released within a day.";
    } else if (days <= 1) {
        document.getElementById("releaseTime").innerHTML = "A new video has been released.";
    } else if (days >= 2) {
        document.getElementById("releaseTime").innerHTML = "The new videos' release date hasn't yet been determined.";
    }
}
window.onload = countdown;
