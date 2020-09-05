

let unit= 'imperial';
function searchWeather(searchTerm){
    console.log(searchTerm)
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchTerm+'&APPID=b44a75f786956d76ce1dd22e69f9b892&units=imperial')
    .then(result => {return result.json();})
    .then(result => {
        init(result);}
    )

    function init(resultFromServer){
        console.log(resultFromServer);
        switch(resultFromServer.weather[0].main){
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

        let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
        let temperatureElement = document.getElementById('temperature');
        let humidityElement = document.getElementById('humidity');
        let windSpeedElement = document.getElementById('windSpeed');
        let cityHeader = document.getElementById('cityHeader');
        let weatherIcon = document.getElementById('documentIconImage');

        weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
      
        let resultDescription = resultFromServer.weather[0].description;
        weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1) ;
        temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176' + 'C';
        cityHeader.innerHTML = resultFromServer.name;
    
    }

}


document.getElementById('searchBtn').addEventListener('click' , () => {
    let searchTerm = document.getElementById('searchInput').value;
        if(searchTerm){
            searchWeather(searchTerm);
        }
            
})




