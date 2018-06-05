const button = document.querySelector('button');

function changeHeader() {
    const heading = document.querySelector('#second');
    heading.textContent = "Lies, Harry's Spells Are Better";
}

button.addEventListener('click', changeHeader);

const submit = document.querySelector("#submitForm");

function changeWithSubmit() {
    const secondHeading = document.querySelector('#second');
    secondHeading.textContent = document.getElementById("myForm").elements.namedItem("headerinp").value;
}

function enterPressed() {
    if (event.keycode == 13) changeWithSubmit;
}
submit.addEventListener('click', changeWithSubmit);
submit.addEventListener('keydown', enterPressed(event));