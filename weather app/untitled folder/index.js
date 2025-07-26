const apiKey = 'dd28f5b9afmshda286718476ef2ap198700jsnd15e4d56f731';
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';
const headers = {
  "x-rapidapi-key": apiKey,
  "x-rapidapi-host": apiHost,
};

const getElement = id => document.getElementById(id);

const updateUI = (data) => {
  getElement("temp").innerText = data.temp;
  getElement("temp2").innerText = data.temp;
  getElement("min_temp").innerText = data.min_temp;
  getElement("max_temp").innerText = data.max_temp;
  getElement("feels_like").innerText = data.feels_like;
  getElement("humidity").innerText = data.humidity;
  getElement("humidity2").innerText = data.humidity;
  getElement("wind_speed").innerText = data.wind_speed;
  getElement("wind_speed2").innerText = data.wind_speed;
  getElement("wind_degrees").innerText = data.wind_degrees;
  getElement("sunrise").innerText = new Date(data.sunrise * 1000).toLocaleTimeString();
  getElement("sunset").innerText = new Date(data.sunset * 1000).toLocaleTimeString();
};

const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://${apiHost}/v1/weather?city=${city}`,
      { method: "GET", headers }
    );
    const data = await response.json();
    console.log(data);
    getElement("cityName").innerText = city;
    updateUI(data);
  } catch (error) {
    alert("Failed to fetch weather data. Try again.");
    console.error(error);
  }
};

getElement("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const city = getElement("city").value.trim();
  if (city) fetchWeather(city);
});

// Fetch default weather
fetchWeather("Peshawar");

// Common cities
const commonCities = ["Lahore", "Karachi", "Quetta", "Islamabad"];
const tableBody = document.getElementById("commonCities");

const fetchCityRow = async (city) => {
  try {
    const response = await fetch(
      `https://${apiHost}/v1/weather?city=${city}`,
      { method: "GET", headers }
    );
    const data = await response.json();
    const row = `
      <tr>
        <td>${city}</td>
        <td>${data.cloud_pct}</td>
        <td>${data.feels_like}</td>
        <td>${data.humidity}</td>
        <td>${data.max_temp}</td>
        <td>${data.min_temp}</td>
        <td>${new Date(data.sunrise * 1000).toLocaleTimeString()}</td>
        <td>${new Date(data.sunset * 1000).toLocaleTimeString()}</td>
        <td>${data.temp}</td>
        <td>${data.wind_degrees}</td>
        <td>${data.wind_speed}</td>
      </tr>`;
    tableBody.innerHTML += row;
  } catch (error) {
    console.error(`Failed to fetch ${city}:`, error);
  }
};
