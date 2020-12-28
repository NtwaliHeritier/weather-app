import Api from './apicall';
import './index.css';
Api.apicall();

const toggle = document.querySelector('.toggle-btn');
toggle.addEventListener('click', () => {
	if (toggle.checked) {
		console.log('checked');
	} else {
		console.log('unchecked');
	}
});
