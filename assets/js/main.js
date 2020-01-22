$(document).ready(function () {
    function iconplay() {


    }
    ///////

    function feach(lat, long,cityname) {
        const anywhere = 'https://cors-anywhere.herokuapp.com/';
        fetch(`${anywhere}https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`)
            .then(res => res.json())
            .then((data) => {
                $("#cityname").text(cityname);
                $("#temperatureavreg").text(Math.floor(data.main.temp))

                $('.weatherType').attr('id',data.weather[0].main);
                var icons = new Skycons({
                    "color": "white"
                });
                icons.set("Haze", Skycons.Haze);
                icons.set("Clear-day", Skycons.CLEAR_DAY);
                icons.set("Clear-night", Skycons.CLEAR_NIGHT);
                icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("Clouds", Skycons.CLOUDY);
                icons.set("Rain", Skycons.RAIN);
                icons.set("Sleet", Skycons.SLEET);
                icons.set("Snow", Skycons.SNOW);
                icons.set("Wind", Skycons.WIND);
                icons.set("Fog", Skycons.FOG);
                icons.play();

                console.log(data);
            }
            )
            .catch(err => console.log(err)
            )
    }
    let lat = 35.6892;
    let long = 51.3890;
    feach(lat, long)
    $(".cityconter a").click(function (e) {
        let lat2 = parseFloat($(this).attr('lat'));
        let long2 = parseFloat($(this).attr('long'));
        let cityname = $(this).attr('city');
        feach(lat2, long2,cityname)
    });

    $(".mylocation").click(function (e) { 
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {
    
                lat3 = position.coords.latitude;
                long3 = position.coords.longitude;
                feach(lat3, long3,"My Location")
            }    
            )
        }
    });
});


