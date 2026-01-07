const Searchbtn = document.getElementById("SearchBtn");
const WeatherContaner = document.getElementById("weather-container");
let islogin = true;

function showLoading() {
  WeatherContaner.innerHTML = `
    <div class="flex justify-center items-center h-40 text-white text-2xl">
      Loading...
    </div>
  `;
}

Searchbtn.addEventListener("click", function () {
  const city = document.getElementById("SearchCity");
  if (!city.value) {
    return;
  }

  showLoading();

  const getCurrentData = async (city) => {
    const APIKEY = "6a008389613b341e0107e07ccfc6cac5";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );

      const data = await response.json();

      WeatherContaner.innerHTML = `
      <div class="flex items-center w-full justify-between  text-white">
                          <div class="flex justify-center items-center gap-2">
                              <i class="fa-solid fa-location-dot text-3xl"></i>
                              <p class="text-2xl font-semibold">${data.name}</p>
                          </div>
                          <div class="flex  justify-center items-center gap-2 mr-5 sm:mr-10">
                              <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon" height="500px" height="500px" >
                              <p class="text-2xl font-semibold">${data.weather[0].main}</p>
                          </div>
                      </div>

                      <div class="flex items-center justify-around gap-10 text-white w-full ">
                          <div class="flex items-center gap-5">
                              <div>
                                  <i class="fa-solid fa-droplet text-3xl"></i>
                              </div>
                              <div>
                                  <p class="text-2xl">Humidity</p>
                                  <p class="text-2xl">${data.main.humidity}%</p>
                              </div>
                          </div>
                          <div class="flex items-center gap-5">
                              <div>
                                  <i class="fa-solid fa-wind text-3xl"></i>
                              </div>
                              <div>
                                  <p class="text-2xl">Wind Speed</p>
                                  <p class="text-2xl">${data.wind.speed} m/s</p>
                              </div>
                          </div>

                      </div>
                     
                      </div>`;
    } catch (err) {
      city.value = "";
      WeatherContaner.innerHTML = `<div class="text-xl">
      <h1> Error Occured Please Search Again !!
      </div>`;
    }
  };

  getCurrentData(city.value);
  city.value = "";
});
