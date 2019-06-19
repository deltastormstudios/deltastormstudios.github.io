function countdown(){
    var setTime= new Date("June 21, 2019 00:00:00");
    var Time= new Date();
    console.log(Time);
    var leftTime= setTime.getTime()-Time.getTime();
    console.log(leftTime);
    var days = Math.floor(leftTime/1000/60/60/24);
    console.log(days);
    if(days>0){
    document.getElementById("days").innerHTML=days;
    }
    else if(days==0){
    document.getElementById("releaseTime").innerHTML="A new video will get released within a day.";
    }
    else if(days<0){
    document.getElementById("releaseTime").innerHTML="The new videos' release date isn't yet determined.";
    }
  }
  window.onload = countdown;
