function time(){
    var time = new Date();
    var hour;
    var minute;
    var year;
    var month;
    var day;
    year = time.getFullYear();
    month = time.getMonth();
    day = time.getDate();
    document.getElementById("time-year").innerHTML = year;
    document.getElementById("time-month").innerHTML = month + 1;
    document.getElementById("time-day").innerHTML = day;
    var temph = time.getHours();
    if(temph <= 9 && temph > 0 ){
        hour = "0" + temph;
    }else{
        hour = temph;
    }
    var tempm = time.getMinutes();
    if(tempm < 10 && tempm >= 0 ){
        minute = "0" + tempm;
    }else{
        minute = tempm;
    }
    document.getElementById("time-hour").innerHTML = hour;
    document.getElementById("time-minute").innerHTML = minute;
}
window.setInterval("time()", 1000);