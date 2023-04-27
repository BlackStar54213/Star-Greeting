myTimer();



function myTimer() {
    const date = new Date();
    let time = date.getTime();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m);
    s= checkTime(s);
    h = checkHour(h);
    h = checkTime(h);
    document.getElementById("time").innerHTML = (h +"/" +m +"/" +s);
    setTimeout(myTimer, 1000);
}

function checkTime(i) {
    if (i<10) {
        i= "0" + i;
        return i;
    }else {return i;}
}

function checkHour(h) {
    if (h>12) {
        document.getElementById("good").innerHTML = ("Afternoon")
        h = h - 12;
        
        return h;
    }else{
        return h;
    }
}