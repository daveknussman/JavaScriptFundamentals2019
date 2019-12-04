/*** As a user, I would like to be able to see my weather forecast for the day , so I  can be informed about the weather.*/

/** Developer notes:
 *    Weather API: https://openweathermap.org/api
 *     Api key: 886705b4c1182eb1c69f28eb8c520e20
 *
 *  1) Retrieve the user's latitude and longitude by using this API: https://ipapi.co/json/
 *  2) Using the user's latitude and longitude return the weather using this API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
 *   a sample call will look like this: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=886705b4c1182eb1c69f28eb8c520e20
 *  3) You can edit this weather app  however you see fit to achieve your goals. (i.e add ids or additional classes if needed). Make the weather app look more whimsical (ie icons based off of the weather forecast).
 *
 *
 *
 */
const btn = document.querySelector("#btn");
const localWeather = document.querySelector("#localWeather");

async function getTemp() {
    try {
        const latlong = await axios("https://ipapi.co/json/");
        let lat = latlong.data.latitude;
        let long = latlong.data.longitude;
        const weather = await axios("http://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&lon=" + long + "&appid=886705b4c1182eb1c69f28eb8c520e20");
        console.log(weather.data);
        console.log(weather.data.weather[0]);
        localWeather.textContent = weather.data.weather[0].description;
        // console.log(latlong);
        // console.log(latlong.data);
        // console.log(latlong.data.latitude);
        // console.log(latlong.data.longitude);
        // console.log(lat);
        // console.log(long);
        // console.log(weather.data.weather[0].description);
    } catch (err) {
       console.error('Error:', err);
    }
};

btn.addEventListener("click",() => getTemp());