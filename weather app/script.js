const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "dd28f5b9afmshda286718476ef2ap198700jsnd15e4d56f731",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    min_temp.innerHTML = response.min_temp;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

Submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("Peshawar")
