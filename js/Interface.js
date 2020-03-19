`strict mode`
class Interface{
    constructor(input, addCity, deleteCity, temp){
        this.input = input;
        this.addCity = addCity;
        this.deleteCity = deleteCity;
        this.temp = temp;
        this.currentTemp = `F`;
        this.cities = new Map();

        this.addCity.addEventListener('click', () => this.submit());
        this.temp.addEventListener('click', () => this.changeTemp(this.currentTemp));
    }

    async submit(){
        if(this.input.value.length !== 0){
            const {lat, lng} = await CityToCoordinates.geocode(this.input.value);

            const owm = new WeatherData(this.cities, this.currentTemp);
            owm.getNewWeatherData(lat, lng);
        };

        //! city autocomplete API
    }

    changeTemp(currentTemp){
        const cardTemp = document.querySelectorAll('.card-weather-temp');
        const farenheit = document.querySelector('.f');
        const celsius = document.querySelector('.c');

        if(currentTemp === `F`){
            cardTemp.forEach(card => {
                let farenheitToCelsius = Math.round((card.innerHTML - 32) * (5/9));
                card.innerHTML = `${farenheitToCelsius}`;
            });
            this.currentTemp = `C`;
            farenheit.style.fontWeight = `300`;
            celsius.style.fontWeight = `600`;
        }else{
            cardTemp.forEach(card =>{
                let celsiusToFarenheit = Math.round((card.innerHTML * (9/5)) + 32);
                card.innerHTML = `${celsiusToFarenheit}`;
            });
            
            this.currentTemp = `F`;
            farenheit.style.fontWeight = `600`;
            celsius.style.fontWeight = `300`;
        }
    }
}