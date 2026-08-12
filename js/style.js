const loginButton = document.getElementById('butn-login');
if (loginButton) {
	loginButton.addEventListener("click", () => {
		window.location.href = "index.html";
	});
}

const switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'));
		this.parentElement.classList.add('is-active');
	});
});
