function countdown(){
    var setTime= new Date("June 20, 2019 00:00:00");
    var Time= new Date();
    var leftTime= setTime.getTime()-Time.getTime();
    var days = Math.floor(leftTime/1000/60/60/24);
    var rdays= leftTime/1000/60/60/24
    if(rdays>=1){
    document.getElementById("days").innerHTML=days;
    }
    else if(rdays>=0){
    document.getElementById("releaseTime").innerHTML="A new video will get released within a day.";
    }
    else if(days<0){
    document.getElementById("releaseTime").innerHTML="The new videos' release date isn't yet determined.";
    }
  }
  window.onload = countdown;
