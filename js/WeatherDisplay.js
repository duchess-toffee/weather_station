`strict mode`
class WeatherDisplay{
    static weatherIcon = {
        Thunderstorm: `⛈️`,
        Drizzle: `🌧️`,
        Rain: `☔️`,
        Snow: `☃️️`,
        Clear: `🌞`,
        Clouds: `⛅`,
        Mist: `🌫️`,
        Smoke: `🌫️`,
        Haze: `🌫️`,
        Dust: `🌫️`,
        Fog: `🌫️`,
        Sand: `🌫️`,
        Ash: `🌫️`,
        Squall: `🌫️`,
        Tornado: `🌪️`
    }

    constructor(cities, temp, timer){
        this.cards = document.querySelector(`.weather-cards`);
        this.placeholder = document.querySelector(`.no-cards`);
        this.cities = cities;
        this.currentTemp = temp;
        this.timer = timer;
    }

    addCard(newCityData){
        this.placeholder.style.visibility = `hidden`;

        // create a new card
        const newCard = document.createElement(`div`);
        newCard.classList.add(`weather-card`);
        newCard.id = `${newCityData.id}`;
        this.cards.appendChild(newCard);

        // delete button
        const xButton = document.createElement(`div`);
        xButton.classList.add(`delete-card`);
        xButton.textContent = `X`;
        this.clickX = (e) => this.rmCard(e);
        xButton.addEventListener(`click`, this.clickX);
        newCard.appendChild(xButton);

        // weather card content
        const cardContent = document.createElement(`div`);
        cardContent.classList.add(`weather-card-content`);
        newCard.appendChild(cardContent);

        // weather card left-side
        const cardLeft = document.createElement(`div`);
        cardLeft.classList.add(`card-left`);
        cardContent.appendChild(cardLeft);

        // weather card city
        const cardCity = document.createElement(`h3`);
        cardCity.classList.add(`card-city`);
        cardCity.textContent = `${newCityData.city}, ${newCityData.country}`;
        cardLeft.appendChild(cardCity);

        // weather card weather containter
        const cardWeather = document.createElement(`div`);
        cardWeather.classList.add(`card-weather`);
        cardLeft.appendChild(cardWeather);
        
        // weather card weather container left-side
        const cardWeatherLeft = document.createElement(`div`);
        cardWeatherLeft.classList.add(`card-weather-left`);
        cardWeather.appendChild(cardWeatherLeft);
        
        // weather card description
        const cardDescription = document.createElement(`p`);
        cardDescription.classList.add(`card-weather-description`);
        cardDescription.textContent = `${newCityData.weather}`;
        cardWeatherLeft.appendChild(cardDescription);

        // weather card humidity
        const cardHumidity = document.createElement(`p`);
        cardHumidity.classList.add(`card-weather-humidity`);
        cardHumidity.textContent = `💧 ${newCityData.humidity}%`;
        cardWeatherLeft.appendChild(cardHumidity);

        // weather card temp
        const cardTemp = document.createElement(`p`);
        cardTemp.classList.add(`card-weather-temp`);
        (this.currentTemp === `F`) ? cardTemp.textContent = `${newCityData.farenheit}` : cardTemp.textContent = `${newCityData.celsius}`
        cardWeather.appendChild(cardTemp);

        // weather card right-side
        const cardRight = document.createElement(`div`);
        cardRight.classList.add(`card-right`);
        cardContent.appendChild(cardRight);

        // weather card icon
        const icon = WeatherDisplay.weatherIcon[newCityData.weather];
        const cardIcon = document.createElement(`div`);
        cardIcon.classList.add(`card-icon`);
        cardIcon.textContent = `${icon}`; 
        cardRight.appendChild(cardIcon);

        // weather card source
        const cardSource = document.createElement(`p`);
        cardSource.classList.add(`card-source`);
        cardSource.textContent = `openweather`; 
        cardRight.appendChild(cardSource);
    }

    updateCard(){
        const allCards = this.cards.querySelectorAll(`.weather-card`)
        allCards.forEach(card => {
            let key = parseInt(card.id);
            let cardData = this.cities.get(key);
            let cardWeather = card.childNodes[1].childNodes[0].childNodes[1].childNodes[0].firstChild;
            let cardHumidity = card.childNodes[1].childNodes[0].childNodes[1].childNodes[0].lastChild;
            let cardTemp = card.childNodes[1].childNodes[0].childNodes[1].childNodes[1];
            let cardIcon = card.childNodes[1].childNodes[1].firstChild;

            cardWeather.textContent = `${cardData.weather}`;
            cardHumidity.textContent = `💧 ${cardData.humidity}%`;
            cardIcon.textContent = `${WeatherDisplay.weatherIcon[cardData.weather]}`;

            if(this.currentTemp === `F`){
                cardTemp.textContent = `${cardData.farenheit}`;
            }else{
                cardTemp.textContent = `${cardData.celsius}`;
            }
        });
    }

    rmCard(e){
        e.target.parentNode.remove();

        const cardId = parseInt(e.target.parentNode.id);
        this.cities.delete(cardId);

        if (this.cities.size === 0){
            this.placeholder.style.visibility = `visible`;
            clearInterval(this.timer);
        }
    }
}