 document.querySelector("#submit").addEventListener("click", function(e){

        e.preventDefault();

        // console.log("clicked");

        
        
        getWeather();
        
        async function getWeather(){

            const key = "5025dd46ae1a0b7d75dd6eda51911b7e";
            
            let city = document.querySelector("input").value;

            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + key);

            const data = await response.json();

            console.log(data);

        //    const {}
        }

        
});


