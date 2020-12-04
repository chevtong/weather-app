 //TODO:  Remember the user choice on subsequent visits
 

//ALL global VARIABLES:
let cityTag; 
let sunIcon;
let currentTemp;
let tempRange;
let detailNum;
let sunImage;
let ctx;
let chartColor;

 //EVENT HANDLERS
 //default city
window.onload = function() {

    getWeather("brussels");

    cityTag = document.querySelector(".city");
    sunIcon = document.querySelector(".sun");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-highest");
    detailNum = document.querySelector(".detail-num");
    sunImage = document.querySelector("img");
    ctx = document.getElementById('myLineChart').getContext('2d');
};

//first city btn
document.querySelector("#submit").addEventListener("click", function(e){

    e.preventDefault();

    city = document.querySelector("input").value;
    cityTag = document.querySelector(".city");
    sunIcon = document.querySelector(".sun");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-highest");
    detailNum = document.querySelector(".detail-num");
    sunImage = document.querySelector("img");
    ctx = document.getElementById('myLineChart').getContext('2d');

    getWeather(city);

});

//plus city btn 
document.querySelector("button.plus").addEventListener("click", function(){

    //display the 2nd city container and delete button
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = "grid";
    document.querySelector("button.plus").style.display = "none";
    document.querySelector("button.delete").style.display = "block";

    city = document.querySelector("#input2").value;
    cityTag = document.querySelector(".city2"); 
    sunIcon = document.querySelector(".sun2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-highest2");
    detailNum = document.querySelector(".detail-num2");
    sunImage = document.querySelector("#image-city2");
    ctx = document.getElementById('myLineChart2').getContext('2d');

    getWeather("bangkok");

});

//delete city btn
document.querySelector("button.delete").addEventListener("click", function(){

    document.querySelector(".container2").style.display = "none";
    document.querySelector("button.plus").style.display = "block";
    document.querySelector("button.delete").style.display = "none";
});

//second city btn
document.querySelector("#submit2").addEventListener("click", function(e){

    e.preventDefault();

    city = document.querySelector("#input2").value;
    cityTag = document.querySelector(".city2"); 
    sunIcon = document.querySelector(".sun2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-highest2");
    detailNum = document.querySelector(".detail-num2");
    sunImage = document.querySelector("#image-city2");
    ctx = document.getElementById('myLineChart2').getContext('2d');
    getWeather(city);
});


//FUNCTIONS
//fetch API function
function getWeather(city){

    const key = "da9a51208d5e4403a9053883caf4d08d";

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
            console.log(data);
             display(data);
             makeChart(data);
        })
};

//display function
function display(data){

    
    //innerHTML wording display
    cityTag.innerHTML = data.city_name;
    sunIcon.innerHTML = description;
    currentTemp.innerHTML = temperature + "°c ";
    tempRange.innerHTML = `<i class="fas fa-caret-up"></i> ${highestTemp}°c   
                           <i class="fas fa-caret-down"></i> ${lowestTemp}°c`;
    detailNum.innerHTML = `${uv} <br>  ${precipation}% <br>
                           ${humidity}% <br> ${windSpeed}km/h`;

    //show related img according to weather discription 
    if(temperature < "1"){
        sunImage.src = "img/cold.png";
        chartColor = "#4793ff";
    } else if(description.includes("clouds")){
        sunImage.src = "img/clouds.png";
        chartColor = "#fcc28c";
    } else if(description.includes("thunderstorm")){
        sunImage.src = "img/thunderstorm.png";
        chartColor = "#fcc28c";
    }  else if(description.includes("rain")){
        sunImage.src = "img/rain.png";
        chartColor = "#515070";
    }  else if(description.includes("sun")){
        sunImage.src = "img/sun.png";
        chartColor = "#fcc28c";
    }  else {
        sunImage.src = "img/beach-sunset.png";
        chartColor = "#fcc28c";
    }   
};

//chart function
function makeChart(data){
    //forcast for chart
    var forcast1 = data.data[1].temp;
    var forcast2 = data.data[2].temp;
    var forcast3 = data.data[3].temp;
    var forcast4 = data.data[4].temp;
    var forcast5 = data.data[5].temp;

    //date for chart
    var date1 = data.data[1].valid_date;
    var date2 = data.data[2].valid_date;
    var date3 = data.data[3].valid_date;
    var date4 = data.data[4].valid_date;
    var date5 = data.data[5].valid_date;

    
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ date1 , date2, date3, date4, date5],
            datasets: [{
                label: 'TEMPERATURE FOR 5 DAYS',
                backgroundColor: 'transparent',
                borderColor: chartColor,
                data: [forcast1, forcast2, forcast3, forcast4, forcast5]
            }]
        },

        // Configuration options go here
        options: {
            responsive:false,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],


                yAxes: [{
                    
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return value + '°C';
                        },
                        stepSize: 5
                    }
                }]
            }
        }
    });
};

