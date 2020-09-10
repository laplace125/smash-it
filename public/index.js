
//function to search weather by location
function searchWeather(searchTerm){
    console.log(searchTerm)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchTerm+'&APPID=b44a75f786956d76ce1dd22e69f9b892&units=metric')
    .then(result => {return result.json();})
    .then(result => {
        init(result);}
    )

    function init(resultFromServer){
        console.log(resultFromServer);
       /* switch(resultFromServer.weather[0].main){
                case 'Clear':
                    document.body.style.backgroundImage = "url('clear.jpg')";
                    break;

                case 'Clouds':
                    document.body.style.backgroundImage = "url('cloudy.jpg')";
                    break;
                case 'Rain':
                case 'Drizzle':
                case 'Mist':
                case 'Haze':
                    document.body.style.backgroundImage = "url('rain.jpg')";
                    break;
                case 'Thunderstorm':
                    document.body.style.backgroundImage = "url('storm.jpg')";
                    break;
                case 'Snow':
                    document.body.style.backgroundImage = "url('snow.jpg')";
                    break;        
                
                default:
                    break;

        }
        */

        let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
        let temperatureElement = document.getElementById('temperature');
        let temperatureElement_max = document.getElementById('temperature_max');
        let temperatureElement_min = document.getElementById('temperature_min');
        let pressureElement = document.getElementById('pressure');
        let windSpeedElement = document.getElementById('windSpeed');
        let cityHeader = document.getElementById('cityHeader');
        let weatherIcon = document.getElementById('documentIconImage');
        let moment = document.getElementById('date');
        


        weatherIcon.src = 'https://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
      
        let ddate = new Date((resultFromServer.dt*1000));
        let ddate1 = ddate.toString();
        
        console.log(ddate1);
        console.log(ddate1.slice(0, 15));
        let resultDescription = resultFromServer.weather[0].description;
        weatherDescriptionHeader.innerHTML = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1) ;
        temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176' + 'C';
        temperatureElement_min.innerHTML = Math.floor(resultFromServer.main.temp_min) + '&#176' + 'C';
        temperatureElement_max.innerHTML = Math.floor(resultFromServer.main.temp_max) + '&#176' + 'C';
        cityHeader.innerHTML = resultFromServer.name;
        windSpeedElement.innerHTML = resultFromServer.wind.speed; 
        pressureElement.innerHTML = resultFromServer.main.pressure; 
        moment.innerHTML = ddate1.slice(0 , 15) ;
        document.getElementById('time').innerHTML = ddate1.slice(15 , 21); 

    }

}
//function to search weather for london on reload
document.getElementById('container').addEventListener('onload' , searchWeather('london'));
//get location input
document.getElementById('searchBtn').addEventListener('click' , () => {
    let searchTerm = document.getElementById('searchInput').value;
        if(searchTerm){
            searchWeather(searchTerm);
        }
            
})

