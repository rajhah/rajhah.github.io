const submit = document.querySelector('input[type="submit"]');
const face = document.querySelector('img[class="Photo"]')
var negative_face = false;

submit.addEventListener('click', () => {
	alert("Contact form not yet implemented");
});

face.addEventListener('click', () => {
	if (negative_face === false) {
		document.getElementById("Headshot").setAttribute("src", "./styles/images/negative_headshot.jpg");
		negative_face = true;
	} else {
		document.getElementById("Headshot").setAttribute("src", "./styles/images/headshot.jfif");
		negative_face = false;
	}
});