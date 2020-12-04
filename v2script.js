
let city;
let cityTag = document.querySelector(".city-name");
let sunIcon = document.querySelector(".description");
let currentTemp = document.querySelector(".current-temp");
let tempRange = document.querySelector(".temp-range");
let sunImage = document.querySelector(".current-icon");

 //default city
 window.onload = function() {

    getWeather("brussels");
    backgroundImage("brussels");

};

document.querySelector("#submit").addEventListener("click", function(e){

    e.preventDefault();

    city = document.querySelector("input").value;


    getWeather(city);
    backgroundImage(city);

});

function getWeather(city){

    const key = "da9a51208d5e4403a9053883caf4d08d";

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((repsonse) => repsonse.json())
    .then((data) => {
        console.log(data)

        display(data);
  
    })

}

function display(data){
     //get today temperature
     let temp = data.data[0].temp;
     var highestTemp = Math.round(data.data[0].max_temp); 
     var lowestTemp = Math.round(data.data[0].min_temp); 
     console.log(temp, highestTemp, lowestTemp);

    //get current weather discription
    var description = data.data[0].weather.description;

    
    //innerHTML wording display
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
    } else if(description.includes("thunderstorm")){
        sunImage.src = "v2img/lightning.png";
    }  else if(description.includes("rain")){
        sunImage.src = "v2img/rain.png";
    }  else if(description.includes("sun")){
        sunImage.src = "v2img/sun.png";
    }   else if(description.includes("snow")){
        sunImage.src = "v2img/snowflake.png";
    }   else {
        sunImage.src = "v2img/rainbow.png";   
    }   

}

function backgroundImage(city){

    const key = "1AtTqASnS-chw9VgN_btgruDd8sdggmuUpUwbk5RAJM";

    fetch("https://api.unsplash.com/search/photos?query=" + city + "&client_id=" + key + "&per_page=1")
    .then((response)=> response.json())
    .then((data) => {
        
        // console.log(data)

        let backgroundUrl = data.results[0].urls.small;
        console.log(backgroundUrl);

        document.querySelector(".citybackground").style.backgroundImage = "url('"+backgroundUrl +"')";

    })
}

// function forecast(data){
//     //forcast for chart
//     var forcast1 = Math.round(data.data[1].temp);
//     var forcast2 = Math.round(data.data[2].temp);
//     var forcast3 = Math.round(data.data[3].temp);
//     var forcast4 = Math.round(data.data[4].temp);
//     var forcast5 = Math.round(data.data[5].temp);

//     console.log(forcast1, forcast2, forcast3, forcast4, forcast5)

//     var forecast1descritpion = data.data[1].weather.description;
//     forecastIcon(forecast1descritpion);
//     var forecast2descritpion = data.data[2].weather.description;
//     forecastIcon(forecast2descritpion);
//     var forecast3descritpion = data.data[3].weather.description;
//     forecastIcon(forecast3descritpion);
//     var forecast4descritpion = data.data[4].weather.description;
//     forecastIcon(forecast4descritpion);
//     var forecast5descritpion = data.data[5].weather.description;
//     forecastIcon(forecast5descritpion);

//     function forecastIcon(forecastDescritpion){
//         if(forecastDescritpion.includes("clouds")){
//             sunImage.src = "v2img/clouds.png";
//         } else if(forecastDescritpion.includes("thunderstorm")){
//             sunImage.src = "v2img/lightning.png";
//         }  else if(forecastDescritpion.includes("rain")){
//             sunImage.src = "v2img/rain.png";
//         }  else if(forecastDescritpion.includes("sun")){
//             sunImage.src = "v2img/sun.png";
//         }   else if(forecastDescritpion.includes("snow")){
//             sunImage.src = "v2img/snowflake.png";
//         }   else {
//             sunImage.src = "v2img/rainbow.png";
            
//         }   
    
  


