const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');

repeatPasswordInput.addEventListener('input', function () {
	if (passwordInput.value !== repeatPasswordInput.value) {
		passwordInput.classList.add('red-border');
		repeatPasswordInput.classList.add('red-border');
		passwordInput.classList.remove('green-border');
		repeatPasswordInput.classList.remove('green-border');
	} else {
		passwordInput.classList.add('green-border');
		repeatPasswordInput.classList.add('green-border');
		passwordInput.classList.remove('red-border');
		repeatPasswordInput.classList.remove('red-border');
	}
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('header').classList.toggle('open');
	})
})
