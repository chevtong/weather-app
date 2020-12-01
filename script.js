 document.querySelector("#submit").addEventListener("click", async function(e){

        e.preventDefault();

        // console.log("clicked");
            const key = "5025dd46ae1a0b7d75dd6eda51911b7e";
            
            let city = document.querySelector("input").value;

            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + key);

            const data = await response.json();

            console.log(data);

            //get temperatures
            var temperature = Math.round(parseFloat(data.main.temp)-273.15);
            var highestTemp = Math.round(parseFloat(data.main.temp_max)-273.15); 
            var lowestTemp = Math.round(parseFloat(data.main.temp_min)-273.15); 

          
            console.log("current temp: " + temperature);
            console.log("highest temp: " + highestTemp);
            console.log("lowest temp: " + lowestTemp);

            //get current data
            var sun = data.weather[0].description;

            console.log(sun);

          
        
        
  
        
});


