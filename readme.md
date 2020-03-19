# Weather Station ⛅

## Requirements

1. User enters in a city name
2. User clicks "add city"
3. A request to opencagedata is made to retrieve the lat/long coordinates of the city
4. An error is shown if the city does not exist
5. Otherwise, a new "weather card" is created on the page
6. The weather card queries the current weather data for the provided lat/long from two sources, openweathermap and darksky (not using darksky anymore due to CORS)
7. The data is rendered to the card
8. Using setTimeout, the card should cycle between the data provided by the two weather sources every 20 seconds. Careful! We don't want to FETCH the data every 9 seconds. We're only toggling which source data to display.
10. Another timer should be installed to refetch the weather data every 5 minutes from the two data sources.
11. An x button on the weather card should remove the card when pressed. Removing the card should also deactivate any timers present.

<br/>

***

<br/>

## Description
This project will take a mobile-first design approach. 

<br/>

***

<br/>

## Risks
Main risks that I see on this are:
- First time trying a mobile build using JS. Unsure of DOM. This will require additional testing
- Usage limits of data queries for Weather APIs
- First time using fetch and async/await
- API token exposed

<br/>

***

<br/>

## Minimum Viable Product

- [x] A list of cities you are tracking weather on
- [x] A search bar to query for a city
- [x] A way to add a city to your list
- [x] A way to remove a city from your list
- [x] A way to choose your temperature (F or C)
- [x] Each city being tracked should have:
- - [x] The name (city, country) or (city, state if in the US if API provided)
- - [x] The current temperature, in the user's selected degrees
- - [x] The weather (eg: 'raining', 'sunny', etc)
- - [x] The humidity in percentage
- - [x] The source (openweather/darksky) (not using darksky anymore due to CORS)
- - [x] An image of the weather
- [x] Attribution to darksky/openweather (not using darksky anymore due to CORS, openweather does not require attribution)


<br/>

***

<br/>

## HTML
- [x] H1 header of the name of the app
- [x] 'F/C' at the top for the user to click their preference
- [x] HTML input for the search bar
- [x] As the user enter a city, an unordered list appears with city matches
- [x] The user can cick on the unordered list item/city to add a weather card
- [x] Each weather card is a div
- [x] An 'x' button on each weather card (Stretch: explore a way to swipe to remove)
- [x] H2 headers for each card's city/country or city/state
- [x] p for current temperature with a class
- [x] p for weather type with class
- [x] p for humidity with a class
- [x] p for source with class
- [x] p for the weather img (using emoji's)

<br/>

***

<br/>

## CSS
- [x] Use a CSS reset like [this one](https://meyerweb.com/eric/tools/css/reset/)
- [x] Normalize your CSS with [this](http://necolas.github.io/normalize.css/)
- [x] Use Sass. Into your main file, import the partials: _variables, _mixins, _reset, _normalize, _header, _search, _card
- [x] _variables: you'll need a color theme, font stack, 
- [x] _mixins: flex-box, animations
- [x] _header: title
- [x] _search: search bar, list items that pop-up during search
- [x] _card: use flex-box or grid to get this organized

<br/>

***

<br/>

## JS
- [x] Use `strict mode`
- [x] Class Interface
- - [x] Properties: listener for input/add/remove
- - [x] As you add a city, it will go to the WeatherConvert class 
- - [x] The remove will access the WeatherData class and WeatherDisplay class
- [x] Class WeatherConvert
- - [x] Converts from city inputted to latitude and longitude
- [x]  Class WeatherData
- - [x] Properties: object(s) that holds queried data of city/country/state, humidity, temp in F and C, weather type; listener to query for the data every 5 minutes
- - [x] Method to query data from a weather source to store into object
- - [x] 2 instances of WeatherData (openWeatherMap & darksky) (not using darksky anymore due to CORS)
- [x] Class WeatherDisplay
- - [x] Static object for emoji/weather type conversion 
- - [x] Method to add/display card (set HTML elements & CSS classes)
- - [x] Method to remove card (remove HTML elements)
- - [x] Method to swap source every 20 seconds using `setTimeout`


<br/>

***

<br/>

## Testing
- [ ] Testing framework will be with Jest
- [ ] Test that city to converting to latitude/longitude
- [ ] Test that the latitude/longitude produces data back from the weather sites of the correct city
- [ ] Test that query data returns with city, country, state, humidity, temp.
- [ ] Test that the weather source in updating every 5 minutes
- [ ] Test that the user input matches with the city search
- [ ] Test that clicking the city adds HTML/CSS elements
- [ ] Test the emoji/weather type conversion
- [ ] Test that removing the card, removes the HTML elements
- [ ] Test that the source is changing every 20 seconds