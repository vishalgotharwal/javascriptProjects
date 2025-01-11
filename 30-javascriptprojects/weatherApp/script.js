const apikey = "0b5b0fe9e40822fc5752a6f4c4f24285"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector('.temp');
const search = document.querySelector('.search');
const city = document.querySelector(".city");
const input = document.querySelector('.Input');  // Fixed casing to match convention

search.addEventListener("click", async () => {  
    const inputValue = input.value.trim();  // Fixed casing and added trim to avoid spaces

    if (inputValue === "") {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${inputValue}&appid=${apikey}`); // Fixed URL interpolation
        if (!response.ok) {
            alert("City not found!");
            return;
        }

        const data = await response.json();
        console.log("Weather Data:", data);

        // Correctly updating the temperature and city name
        temp.innerText = `${parseInt(data.main.temp)}°C`;
        city.innerText = `${data.name}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data!");
    }
});
