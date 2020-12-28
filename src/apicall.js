const Api = (() => {
	const apicall = () => {
		const form = document.forms['api-call'];
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const location = document.querySelector('input').value;
			try {
				const response = await getData(location);
				const result = document.querySelector('.result');
				result.textContent = response.main.temp;
			} catch (e) {
				console.log(e.message);
			}
		});
	};

	const getData = async (location) => {
		const query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=94193b62c5095be38288793639b5cfdc`;
		console.log(query);
		const data = await fetch(query);
		const response = await data.json();
		return response;
	};
	return { apicall };
})();

export default Api;
