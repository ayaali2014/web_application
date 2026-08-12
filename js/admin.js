function setBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}

document.getElementById('red').addEventListener('click', () => setBackgroundColor('red'));
document.getElementById('blue').addEventListener('click', () => setBackgroundColor('blue'));
document.getElementById('green').addEventListener('click', () => setBackgroundColor('green'));
