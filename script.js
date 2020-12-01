 document.querySelector("#submit").addEventListener("click", async function(e){

        e.preventDefault();

            const key = "da9a51208d5e4403a9053883caf4d08d";
            
            let city = document.querySelector("input").value;

            const response = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key);

            const data = await response.json();

            console.log(data);

            // //get current weather discription
            var sun = data.data[0].weather.description;
            console.log(sun);
            document.querySelector(".sun").innerHTML = `Now is ${sun}`;

            //get temperatures
            var temperature = data.data[0].temp;
            var highestTemp = data.data[0].max_temp; 
            var lowestTemp = data.data[0].min_temp; 

            console.log("current temp: " + temperature + "°C ");
            console.log("highest temp: " + highestTemp + "°C ");
            console.log("lowest temp: " + lowestTemp + "°C ");

            //forcast
            var forcast1 = data.data[1].temp;
            var forcast2 = data.data[2].temp;
            var forcast3 = data.data[3].temp;
            var forcast4 = data.data[4].temp;
            var forcast5 = data.data[5].temp;

        console.log("5 days forcast: "+ forcast1 + "°C " + forcast2 + "°C " + forcast3 + "°C " +  forcast4 + "°C " +  forcast5 + "°C" );

        

        

           


          
        
        
  
        
});







            //OPENWEATHER API 
            // const key = "5025dd46ae1a0b7d75dd6eda51911b7e";
            
            // let city = document.querySelector("input").value;

            // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + key);

            // const data = await response.json();

            // console.log(data);

            // //get temperatures
            // var temperature = Math.round(parseFloat(data.main.temp)-273.15);
            // var highestTemp = Math.round(parseFloat(data.main.temp_max)-273.15); 
            // var lowestTemp = Math.round(parseFloat(data.main.temp_min)-273.15); 

          
            // console.log("current temp: " + temperature);
            // console.log("highest temp: " + highestTemp);
            // console.log("lowest temp: " + lowestTemp);

            // //get current weather discription
            // var sun = data.weather[0].description;

            // document.querySelector(".sun").innerHTML = `Now is ${sun}`;

