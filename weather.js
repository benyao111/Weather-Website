window.addEventListener('load', () => {
	let longitude;
	let latitude;
	let temperatureDescription = document.querySelector(".temperature-description");
	let temperatureDegree = document.querySelector(".temperature-degree");
	let locationTimezone = document.querySelector(".location-timezone");
	let temperatureSection = document.querySelector(".temperature");
	const temperatureSpan = document.querySelector(".temperature span");

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position)
			longitude = position.coords.longitude;
			latitude = position.coords.latitude;
			const proxy = "http://cors-anywhere.herokuapp.com/"; 
			const api = `${proxy}https://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6907d289e10d714a6e88b30761fae22`;
			fetch(api) 
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				console.log(data.main.temp, data.weather[0].description, data.name)
				const {temp} = data.main;
				const {desc} = data.weather[0].description;
				const {name} = data.name;
				//Set DOM elements from the API
				temperatureDegree.textContent = temp;
				//temperatureDescription.textContent = desc; 
				//locationTimezone.textContent = name; 
				temperatureDescription.textContent = data.weather[0].description; 
				locationTimezone.textContent = data.name; 
				//Celcius to Fahrenheit Formula
				let f = (temp * (9 / 5) + 32) ; 
				//console.log (f);
	// Change Temperature from C to F 
		temperatureSection.addEventListener("click", () => {
			if (temperatureSpan.textContent === "C") {
				temperatureSpan.textContent = "F";
				temperatureDegree.textContent = Math.floor(f*100)/100; 
				//rounds to 2 decimal places now
			} else { 
				temperatureSpan.textContent = "C";
				temperatureDegree.textContent = temp;
			//Background color changing - changes after 2 clicks but not entirely sure why!!
		window.addEventListener("click", () => {
			if ( temp >= 23 ) {
				document.body.style.background = "linear-gradient(red,yellow)";
				; 
			} else if (temp <= 1 ) {
				document.body.style.background = "linear-gradient(blue,white)";
			}
			else{ document.body.style.background = "linear-gradient(green,yellow)";
			}})
		}})
		})
			});
	}			
	else { 
		h1.textContent = "Please enable location!" 
		alert("Please enable location!")
		};
		});

		//maybe next you can make background change with an if statment. like if(temp < 0 or whatnot then background changes to light blue gradient or some snowy shit)
