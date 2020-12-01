 //TODO: put codes in different functions
 //TODO: compare cities
 //TODO: see searching record
 //TODO: input value error
 //TODO: CSS, responsive
 
 document.querySelector("#submit").addEventListener("click", async function(e){

        e.preventDefault();
    });
            const key = "da9a51208d5e4403a9053883caf4d08d";
            let city = document.querySelector("input").value;

            const response = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key);
            const data = await response.json();
            console.log(data);

            //get current weather discription
            var sun = data.data[0].weather.description;
           
            //get temperatures
            var temperature = data.data[0].temp;
            var highestTemp = data.data[0].max_temp; 
            var lowestTemp = data.data[0].min_temp; 

            //forcast
            var forcast1 = data.data[1].temp;
            var forcast2 = data.data[2].temp;
            var forcast3 = data.data[3].temp;
            var forcast4 = data.data[4].temp;
            var forcast5 = data.data[5].temp;

            console.log("5 days forcast: "+ forcast1 + "°C " + forcast2 + "°C " + forcast3 + "°C " +  forcast4 + "°C " +  forcast5 + "°C" );

            //display function
            function display(){
                document.querySelector(".sun").innerHTML = `Now is ${sun}`;
                document.querySelector(".current-temp").innerHTML = "current: " + temperature + "°C ";
                document.querySelector(".temp-range").innerHTML = `Highest ${highestTemp}°C  / ${lowestTemp}°C  Lowest`;

            }

            display();

            //date for chart
            var date1 = data.data[1].valid_date;
            var date2 = data.data[2].valid_date;
            var date3 = data.data[3].valid_date;
            var date4 = data.data[4].valid_date;
            var date5 = data.data[5].valid_date;
            console.log("The next 5 days: " + date1 + " "+ date2 + " "+ date3 + " "+ date4 + " "+ date5);

            //chart
            function makeChart(){
                var ctx = document.getElementById('myLineChart').getContext('2d');
                var chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'line',
                
                    // The data for our dataset
                    data: {
                        labels: [ date1 , date2, date3, date4, date5],
                        datasets: [{
                            label: 'Next 5 Day',
                            backgroundColor: 'transparent',
                            borderColor: 'lightblue',
                            data: [forcast1, forcast2, forcast3, forcast4, forcast5]
                        }]
                    },
    
            
                    // Configuration options go here
                    options: {
                        responsive:false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    // Include a dollar sign in the ticks
                                    callback: function(value, index, values) {
                                        return value + '°C';
                                    }
                                }
                            }]
                        }
                    }
                });
            };
        
            makeChart();

        

           


          
        
        
  
        










