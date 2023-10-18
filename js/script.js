var apiKey = "698478667b6522b9d21d16e7393336de";
var city = "";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
var searchArea = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
var today = dayjs();
$('#time').text(today.format('dddd, MMMM D, YYYY'));


//Update the day function
function updateDay() {
    const dateElement = $('#day');
    const dayOne = $('#day-1');
    const dayTwo = $('#day-2');
    const dayThree = $('#day-3');
    const dayFour = $('#day-4');
    const dayFive = $('#day-5');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentOne = dayjs().add(1, 'day').format('dddd, MMMM D, YYYY');
    const currentTwo = dayjs().add(2, 'day').format('dddd, MMMM D, YYYY');
    const currentThree = dayjs().add(3, 'day').format('dddd, MMMM D, YYYY');
    const currentFour = dayjs().add(4, 'day').format('dddd, MMMM D, YYYY');
    const currentFive = dayjs().add(5, 'day').format('dddd, MMMM D, YYYY');
    dateElement.text(currentDate);
    dayOne.text(currentOne);
    dayTwo.text(currentTwo);
    dayThree.text(currentThree);
    dayFour.text(currentFour);
    dayFive.text(currentFive);
  }

//Function to get weather data when a city is searched
async function getWeather(city) {
    const Response = await fetch(queryURL + city +`&appid=${apiKey}`);
     var data = await Response.json(); 
     console.log(data);
     document.querySelector(".city-name").innerHTML = data.city.name; 
     document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°F";
     document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
     document.querySelector(".wind").innerHTML = Math.round(data.list[0].wind.speed) + "Mph";

     document.querySelector(".temp-1").innerHTML = "Temp: " + Math.round(data.list[8].main.temp) + "°F";
     document.querySelector(".temp-2").innerHTML = "Temp: " + Math.round(data.list[16].main.temp) + "°F";
     document.querySelector(".temp-3").innerHTML = "Temp: " + Math.round(data.list[24].main.temp) + "°F";
     document.querySelector(".temp-4").innerHTML = "Temp: " + Math.round(data.list[32].main.temp) + "°F";
     document.querySelector(".temp-5").innerHTML = "Temp: " + Math.round(data.list[40].main.temp) + "°F";

     document.querySelector(".wind-1").innerHTML = "Wind: " + Math.round(data.list[8].wind.speed) + "Mph";
     document.querySelector(".wind-2").innerHTML = "Wind: " + Math.round(data.list[16].wind.speed) + "Mph";
     document.querySelector(".wind-3").innerHTML = "Wind: " + Math.round(data.list[24].wind.speed) + "Mph";
     document.querySelector(".wind-4").innerHTML = "Wind: " + Math.round(data.list[32].wind.speed) + "Mph";
     document.querySelector(".wind-5").innerHTML = "Wind: " + Math.round(data.list[40].wind.speed) + "Mph";

     document.querySelector(".humidity-1").innerHTML = "Humidity: " + data.list[8].main.humidity + "%";
     document.querySelector(".humidity-2").innerHTML = "Humidity: " + data.list[16].main.humidity + "%";
     document.querySelector(".humidity-3").innerHTML = "Humidity: " + data.list[24].main.humidity + "%";
     document.querySelector(".humidity-4").innerHTML = "Humidity: " + data.list[32].main.humidity + "%";
     document.querySelector(".humidity-5").innerHTML = "Humidity: " + data.list[40].main.humidity + "%";



    //  if (data.list[0].weather[0].main == "Clear"){
    //     weatherIcon.scr = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
    //  } 
    //  else if (data.list[0].weather[0].main == "Clouds"){
    //     weatherIcon.scr = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
    //  }
    //  else if (data.list[0].weather[0].main == "Rain"){
    //     weatherIcon.scr = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
    //  }
    //  else if (data.list[0].weather[0].main == "Mist"){
    //     weatherIcon.scr = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
    //  }
    //  else if (data.list[0].weather[0].main == "Snow"){
    //     weatherIcon.scr = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
    //  }
}

//On click button it will getWeather
searchBtn.addEventListener("click", function() {
    if (searchArea.value == "") {
        alert("Please enter city name.");
    } else {
        getWeather(searchArea.value);
    }
})

//Call dayjs to get the days
updateDay();
