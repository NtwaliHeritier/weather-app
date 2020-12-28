const Api = (() => {
	const apicall = () => {
		const form = document.forms['api-call'];
		let unit = '';
		const toggle = document.querySelector('.toggle-btn');
		toggle.addEventListener('click', () => {
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
			try {
				const response = await getImage(document.querySelector('input').value);
				const container = document.querySelector('.container');
				container.style.background = `url(${response.results[0].urls.regular})`;
				container.style.backgroundRepeat = 'no-repeat';
				container.style.backgroundSize = 'cover';
			} catch (e) {
				console.log(e);
			}
		});
	};

	const getData = async (location, unit) => {
		const query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=94193b62c5095be38288793639b5cfdc`;
		const data = await fetch(query);
		const response = await data.json();
		return response;
	};

	const processData = async (unit) => {
		const location = document.querySelector('input').value;
		try {
			const response = await getData(location, unit);
			const result = document.querySelector('.result');
			result.textContent = response.main.temp + ' deg.';
			result.textContent += unit == 'metric' ? ' Celcius' : ' Fahrenheit';
			result.innerHTML += `<br> ${response.weather[0].description}`;
		} catch (e) {
			console.log(e.message);
		}
	};

	const getImage = async (location) => {
		const query = `https://api.unsplash.com/search/photos?page=1&query="${location} landscape"&orientation=landscape&per_page=1&client_id=_Icg2UQ8IkX1mbHiRXvGgX5by5rfy13ncjpH--5-DX8`;
		console.log(query);
		const data = await fetch(query);
		const response = await data.json();
		return response;
	};

	return { apicall };
})();

export default Api;
