const WEEK = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];  // The days of the week for the date 

function updateTime() {  // function head with a function name updateTime
    var now = new Date();  // create anew variable now

    // code for the time 
    document.getElementById("time").innerText =   // dom manipulator to link to the html 
    zeroPadding(now.getHours(), 2) + ":" +  // code to get the hour
    zeroPadding(now.getMinutes(), 2) + ":" +  // code to get the minutes 
    zeroPadding(now.getSeconds(), 2) ;  // code to get the seconds

    // code ofr the date 
    document.getElementById("date").innerText = 
    now.getFullYear() + "-" +
    zeroPadding(now.getMonth() + 1, 2) + "-"+
    zeroPadding(now.getDate(), 2) + "-" +
    WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, "0");
}
   
