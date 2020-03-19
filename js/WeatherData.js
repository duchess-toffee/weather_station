`strict mode`
class WeatherData{
    constructor(cities, temp){
        this.key = `d6848f7c0806448e76e1edad6cdb30cc`, 
        this.url = `https://api.openweathermap.org/data/2.5/weather`;
        this.cities = cities;
        this.currentTemp = temp;

        this.timer = setInterval(() => this.resetData(), 1000 * 60 * 5);
    }

    getNewWeatherData(lat, lng){
        fetch(`${this.url}?lat=${lat}&lon=${lng}&appid=${this.key}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(this.cities.has(data.id)){
                return;
            }
            const newCityData = {
                id: data.id,
                city: data.name,
                country: data.sys.country,
                kelvin: data.main.temp,
                farenheit: Math.round((((data.main.temp)-273.15)*(9/5))+32),
                celsius: Math.round((data.main.temp)-273.15),
                humidity: data.main.humidity,
                weather: data.weather[0].main,
                lat: data.coord.lat,
                lng: data.coord.lon
            }

            this.trackCity(newCityData);
            this.createCard(newCityData);
        });
    }

    createCard(newCityData){
        const newCard = new WeatherDisplay(this.cities, this.currentTemp, this.timer);
        newCard.addCard(newCityData);
    }

    trackCity(newCityData){
        this.cities.set(newCityData.id, newCityData);
    }

    resetData(){
        if(this.cities.size !== 0){
            this.cities.forEach(city =>{
                fetch(`${this.url}?lat=${city.lat}&lon=${city.lng}&appid=${this.key}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const cityData = {
                        id: data.id,
                        city: data.name,
                        country: data.sys.country,
                        kelvin: data.main.temp,
                        farenheit: Math.round((((data.main.temp)-273.15)*(9/5))+32),
                        celsius: Math.round((data.main.temp)-273.15),
                        humidity: data.main.humidity,
                        weather: data.weather[0].main,
                        lat: data.coord.lat,
                        lng: data.coord.lon
                    }

                    this.updateWeather();
                });
            });
        }
    }

    updateWeather(){
        const updateWeatherDisplay = new WeatherDisplay(this.cities);
        updateWeatherDisplay.updateCard();
    }
}