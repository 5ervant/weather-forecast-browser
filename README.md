# Weather Forecast Viewer

Looking for a [React developer](https://www.5techcenter.com)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo and install dependencies with the following:

```
> git clone https://github.com/5ervant/weather-forecast-browser.git
> cd weather-forecast-browser
> npm install
```

#### Not Familiar with Git?
Click [here](https://github.com/5ervant/weather-forecast-browser/archive/master.zip) to download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and install dependencies by running:

```
> npm install
```

### Applying OpenWeatherMap and Google Maps API keys ###

Go to [OpenWeatherMap](https://openweathermap.org), sign up to have your own API identification key, open */src/actions/index.js* and change the `API_KEY` value with your key and the `COUNTRY_CODE` value with your target ISO 3166 country code. Obtain your [Google Maps API key by clicking here](https://developers.google.com/maps/documentation/javascript/get-api-key), open */index.js* and change `YOUR_API_KEY` with your key. And open your terminal, change to the project directory, then start the gulp process with:

```
> npm start
```

Live preview can be seen at: https://5ervant.github.io/weather-forecast-browser/
