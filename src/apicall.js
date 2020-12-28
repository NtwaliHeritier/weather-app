const Api = (() => {
	const apicall = () => {
		const form = document.forms['api-call'];
		let unit = '';
		const toggle = document.querySelector('.toggle-btn');
		toggle.addEventListener('click', async () => {
			if (toggle.checked) {
				unit = 'imperial';
			} else {
				unit = 'metric';
			}
			processData(unit);
		});

		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			processData('metric');
		});
	};

	const getData = async (location, unit) => {
		const query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=94193b62c5095be38288793639b5cfdc`;
		console.log(query);
		const data = await fetch(query);
		const response = await data.json();
		return response;
	};

	const processData = async (unit) => {
		const location = document.querySelector('input').value;
		try {
			const response = await getData(location, unit);
			const result = document.querySelector('.result');
			result.textContent = response.main.temp;
			result.textContent += unit == 'metric' ? ' Celcius' : ' Fahrenheit';
			result.innerHTML += `<br> ${response.weather[0].description}`;
		} catch (e) {
			console.log(e.message);
		}
	};

	return { apicall };
})();

export default Api;
