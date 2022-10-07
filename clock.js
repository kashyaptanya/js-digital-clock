function time(){
    var datetime = new Date();
    console.log(datetime)
     var hrs = datetime.getHours();
    console.log(hrs)
    var mins = datetime.getMinutes();
    console.log(mins)
    var sec = datetime.getSeconds();
    console.log(sec)
  

    if(hrs>=12){
        session.innerHTML ='PM'
    }
    else{
        session.innerHTML ='AM'
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("min").innerHTML = mins; 
    document.getElementById("seconds").innerHTML = sec;
    
}
setInterval(time,10)
time()
