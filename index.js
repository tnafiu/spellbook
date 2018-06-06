const button = document.querySelector('button');

function changeHeader() {
    const heading = document.querySelector('#second');
    heading.textContent = "Lies, Harry's Spells Are Better";
}

button.addEventListener('click', changeHeader);

const form = document.querySelector("form");

const changeWithSubmit = function(ev) {
    ev.preventDefault()

    const f = ev.target;
    const spellName = f.yourSpell.value;
    const spellDesc = f.yourDescription.value;

    const currentUl = document.getElementById("spells");
    const newList = document.createElement("li");
    newList.appendChild(document.createTextNode(spellName + ": " + spellDesc));
    currentUl.appendChild(newList);

    f.reset()
}

const enterPressed = function(event) {
    if (event.keycode == 13) changeWithSubmit;
}
form.addEventListener('submit', changeWithSubmit);
form.addEventListener('keydown', enterPressed(event));