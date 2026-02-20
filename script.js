const curDate = document.getAnimations("date");
let weathercon = document.getElementById("weathercon");

  const tempStatus = "Clouds";
  const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let currentTime = new Date();
    console.log(weekday[currentTime.getDay()]);
  }

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date()
    var month = months[now.getMonth()+1];
    var day = now.getDate();

    var hours = now.getHours();
    var mins = now.getMinutes();
    currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
  
  }