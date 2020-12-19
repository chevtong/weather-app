let city;
let background;
let cityTag;
let currentTemp;
let tempRange ;
let sunImage ;
let fore1;
let fore2;
let fore3;  
let fore4;  
let fore5;
var forecast1logo ;
var forecast2logo;
var forecast3logo; 
var forecast4logo ;
var forecast5logo ;
var foreDate1;
var foreDate2;
var foreDate3;
var foreDate4;
var foreDate5;

//default city
 window.onload = function() {

    //get temp location in HTML
    background = document.querySelector(".citybackground");
    cityTag = document.querySelector(".city-name");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-range");
    sunImage = document.querySelector("#current-icon");
    //get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp");
    fore2 =  document.querySelector(".date2-temp");   
    fore3 =  document.querySelector(".date3-temp");   
    fore4 =  document.querySelector(".date4-temp");   
    fore5 =  document.querySelector(".date5-temp");
    // get forecast logo location inHTML
    forecast1logo = document.querySelector("#current-icon-day1");
    forecast2logo = document.querySelector("#current-icon-day2");
    forecast3logo = document.querySelector("#current-icon-day3"); 
    forecast4logo = document.querySelector("#current-icon-day4");
    forecast5logo = document.querySelector("#current-icon-day5");
    // get forecast date location inHTML
    foreDate1 = document.querySelector(".date1");
    foreDate2 = document.querySelector(".date2");
    foreDate3 = document.querySelector(".date3");
    foreDate4 = document.querySelector(".date4");
    foreDate5 = document.querySelector(".date5");

    //call function with default city
    getWeather("brussels");
    backgroundImage("brussels");

    

};

//first city search btn
document.querySelector("#submit").addEventListener("click", function(e){

    e.preventDefault();

    city = document.querySelector("input").value;

    //curretn temp location in HTML
    background = document.querySelector(".citybackground");
    cityTag = document.querySelector(".city-name");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-range");
    sunImage = document.querySelector("#current-icon");
    //get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp");
    fore2 =  document.querySelector(".date2-temp");   
    fore3 =  document.querySelector(".date3-temp");   
    fore4 =  document.querySelector(".date4-temp");   
    fore5 =  document.querySelector(".date5-temp");
    // get forecast logo location inHTML
    forecast1logo = document.querySelector("#current-icon-day1");
    forecast2logo = document.querySelector("#current-icon-day2");
    forecast3logo = document.querySelector("#current-icon-day3"); 
    forecast4logo = document.querySelector("#current-icon-day4");
    forecast5logo = document.querySelector("#current-icon-day5");
    // get forecast date location inHTML
    foreDate1 = document.querySelector(".date1");
    foreDate2 = document.querySelector(".date2");
    foreDate3 = document.querySelector(".date3");
    foreDate4 = document.querySelector(".date4");
    foreDate5 = document.querySelector(".date5");

    getWeather(city);
    backgroundImage(city);

});

//second city search btn
document.querySelector("#submit2").addEventListener("click", function(e){

    e.preventDefault();

    city = document.querySelector("#city-input2").value;

    //city2 - get current temp location in HTML
    background = document.querySelector(".citybackground2");
    cityTag = document.querySelector(".city-name2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-range2");
    sunImage = document.querySelector("#current-icon2");
    //city 2 - get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp-2");
    fore2 =  document.querySelector(".date2-temp-2");   
    fore3 =  document.querySelector(".date3-temp-2");   
    fore4 =  document.querySelector(".date4-temp-2");   
    fore5 =  document.querySelector(".date5-temp-2");
    // city 2 - get forecast logo location in HTML
    forecast1logo = document.querySelector("#current-icon-day1-2");
    forecast2logo = document.querySelector("#current-icon-day2-2");
    forecast3logo = document.querySelector("#current-icon-day3-2"); 
    forecast4logo = document.querySelector("#current-icon-day4-2");
    forecast5logo = document.querySelector("#current-icon-day5-2");
    // city 2 - get forecast date location in HTML
    foreDate1 = document.querySelector(".date1-2");
    foreDate2 = document.querySelector(".date2-2");
    foreDate3 = document.querySelector(".date3-2");
    foreDate4 = document.querySelector(".date4-2");
    foreDate5 = document.querySelector(".date5-2");

    getWeather(city);
    backgroundImage(city);
});


//plus city btn 
document.querySelector("#plus").addEventListener("click", function(e){

    e.preventDefault();
    //display the 2nd city container and hide plus button
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = "grid";
    document.querySelector("#plus").style.display = "none";
    
    //city2 - get current temp location in HTML
    background = document.querySelector(".citybackground2");
    cityTag = document.querySelector(".city-name2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-range2");
    sunImage = document.querySelector("#current-icon2");
    //city 2 - get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp-2");
    fore2 =  document.querySelector(".date2-temp-2");   
    fore3 =  document.querySelector(".date3-temp-2");   
    fore4 =  document.querySelector(".date4-temp-2");   
    fore5 =  document.querySelector(".date5-temp-2");
    // city 2 - get forecast logo location in HTML
    forecast1logo = document.querySelector("#current-icon-day1-2");
    forecast2logo = document.querySelector("#current-icon-day2-2");
    forecast3logo = document.querySelector("#current-icon-day3-2"); 
    forecast4logo = document.querySelector("#current-icon-day4-2");
    forecast5logo = document.querySelector("#current-icon-day5-2");
    // city 2 - get forecast date location in HTML
    foreDate1 = document.querySelector(".date1-2");
    foreDate2 = document.querySelector(".date2-2");
    foreDate3 = document.querySelector(".date3-2");
    foreDate4 = document.querySelector(".date4-2");
    foreDate5 = document.querySelector(".date5-2");

    //call function with default city
    getWeather("hong kong");
    backgroundImage("hongkong");

});

// delete city btn
document.querySelector("#delete").addEventListener("click", function(e){

    e.preventDefault();

    //hide city2 container and display plus btn
    document.querySelector(".container2").style.display = "none";
    document.querySelector("#plus").style.display = "initial";
   
});

function getWeather(city){

    const key = "da9a51208d5e4403a9053883caf4d08d";

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((repsonse) => repsonse.json())
    .then((data) => {

        // console.log(data)

        displayToday(data);
        forecast(data);
    })
}

function backgroundImage(city){

    const key = "1AtTqASnS-chw9VgN_btgruDd8sdggmuUpUwbk5RAJM";

    fetch("https://api.unsplash.com/search/photos?query=" + city + "&client_id=" + key + "&per_page=1")
    .then((response)=> response.json())
    .then((data) => {
        
        //grab the url from json 
        let backgroundUrl = data.results[0].urls.small;
        //change background image url
        background.style.backgroundImage = "url('"+backgroundUrl +"')";
    })
}

function displayToday(data){
     //get current temperature
     let temp = Math.round(data.data[0].temp);
     var highestTemp = Math.round(data.data[0].max_temp); 
     var lowestTemp = Math.round(data.data[0].min_temp); 

    //get current weather discription
    var description = data.data[0].weather.description;

    //innerHTML display
    cityTag.innerHTML = `<h3>${data.city_name}</h3>
                            <h4>${description}</h4>`;
    currentTemp.innerHTML = `<p> ${temp}°</p>`;
    tempRange.innerHTML = `<p><i class="fas fa-caret-up"></i> ${highestTemp}°c   
                           <i class="fas fa-caret-down"></i> ${lowestTemp}°c</p>`;

    //show related img according to weather discription 
    if(temp < "1"){
        sunImage.src = "v2img/cold.png";
    } else if(description.includes("clouds")){
        sunImage.src = "v2img/clouds.png";
    } else if(description.includes("Thunderstorm")){
        sunImage.src = "v2img/lightning.png";
    }  else if(description.includes("rain")){
        sunImage.src = "v2img/rain.png";
    }  else if(description.includes("sun")){
        sunImage.src = "v2img/sun.png";
    }   else if(description.includes("snow")){
        sunImage.src = "v2img/snowflake.png";
    }   else if(description.includes("Clear")){
        sunImage.src = "v2img/sun.png";
    }   else {
        sunImage.src = "v2img/rainbow.png";   
    }   
}



function forecast(data){
    //get forecast temp from json file
    var forcast1 = Math.round(data.data[1].temp);
    var forcast2 = Math.round(data.data[2].temp);
    var forcast3 = Math.round(data.data[3].temp);
    var forcast4 = Math.round(data.data[4].temp);
    var forcast5 = Math.round(data.data[5].temp);

    //display forecast temp in HTML
    fore1.innerHTML = forcast1+"°";
    fore2.innerHTML = forcast2+"°";   
    fore3.innerHTML = forcast3+"°";   
    fore4.innerHTML = forcast4+"°";   
    fore5.innerHTML = forcast5+"°";

    //display forecast date in HTML
    foreDate1.innerHTML = data.data[1].datetime;
    foreDate2.innerHTML = data.data[2].datetime;
    foreDate3.innerHTML = data.data[3].datetime;
    foreDate4.innerHTML = data.data[4].datetime;
    foreDate5.innerHTML = data.data[5].datetime;
 
    //get forecast description from json file
    var forecast1descritpion = data.data[1].weather.description;
    var forecast2descritpion = data.data[2].weather.description;
    var forecast3descritpion = data.data[3].weather.description;
    var forecast4descritpion = data.data[4].weather.description;
    var forecast5descritpion = data.data[5].weather.description;

    //function to put weathericon accordingly
    function forecastIcon(forecastDescription, logo){
        if(forecastDescription.includes("clouds")){
            logo.src = "v2img/clouds.png";
        } else if(forecastDescription.includes("Thunderstorm")){
            logo.src = "v2img/lightning.png";
        }  else if(forecastDescription.includes("rain")){
            logo.src = "v2img/rain.png";
        }  else if(forecastDescription.includes("sun")){
            logo.src = "v2img/sun.png";
        }   else if(forecastDescription.includes("snow")){
            logo.src = "v2img/snowflake.png";
        }   else if(forecastDescription.includes("Clear")){
            logo.src = "v2img/sun.png";
        }   else {
            logo.src = "v2img/rainbow.png";   
        }  
    }
    forecastIcon(forecast1descritpion, forecast1logo);
    forecastIcon(forecast2descritpion, forecast2logo);
    forecastIcon(forecast3descritpion, forecast3logo);
    forecastIcon(forecast4descritpion, forecast4logo);
    forecastIcon(forecast5descritpion, forecast5logo);

}
