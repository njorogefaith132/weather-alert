
const today= new Date();
document.getElementById('time').innerHTML=today;

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

 
  function weatherAlert( cityName ) {

    var key = '17d5c0fa02a5c2ed958bccc86de47176';
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key + '&units=metric')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }

  window.onload = function() {
    
   weatherAlert('New York')

  }

 function drawWeather(alert) {
    
   
    document.getElementById('temp').innerHTML = alert.main.temp + '&deg;';
    document.getElementById('location').innerHTML = alert.name;
  }
  
  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("Sw Registered!");
        console.log("registration");
      }).catch(error =>{
        console.log("Sw Registration faied");
        console.log(error);
      })

  }