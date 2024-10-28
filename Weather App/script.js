fetch('https://api.unsplash.com/photos/random?query=landscape&client_id=zNwzT6YTD8puWk6b6f6VIQyNnmsM3ePxHOSsiNu9fuM')
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.body.style.backgroundSize = `cover`
        document.body.style.backgroundRepeat = `no-repeat`
        document.body.style.backgroundPosition = `center`
    })

let weather = {
    "apiKey": '83467daa0af229d4b60215c8c6f2881e',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayWeather(data)
                this.fetchBackgroundImage(city)
            });
    },
    displayWeather: function (data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        document.querySelector('.city').innerText = 'Weather in ' + name
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png'
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = temp + '°C'
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%'
        document.querySelector('.wind').innerText = 'Wind speed: ' + speed + 'km/h'
        document.querySelector('.weather').classList.remove('loading')
    },
    fetchBackgroundImage: function (city) {
        const unsplashApiKey = 'zNwzT6YTD8puWk6b6f6VIQyNnmsM3ePxHOSsiNu9fuM'
        fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashApiKey}`)
            .then(response => response.json())
            .then(data => {
                const imgUrl = data.urls.regular
                document.body.style.backgroundImage = `url(${imgUrl})`
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundPosition = 'center';
            })
            .catch(error => {
                console.log('Error fetching the image:', error)
                document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape')`
            })
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector('.search button').addEventListener('click', function () {
    weather.search()
})

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        weather.search()
    }
})

weather.fetchWeather('Japan')