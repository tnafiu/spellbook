/*const wand = document.querySelector('#magic-wand');
wand.style.opacity = 1;
window.onload()*/



const button = document.querySelector('button');

function changeHeader() {
    const heading = document.querySelector('#second');
    heading.textContent = "Lies, Harry's Spells Are Better";
}
button.addEventListener('click', changeHeader);

const app = {
    // an array to hold the spells
    spellArray: [],
    init: function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.changeWithSubmit(ev)
        })
    },

    renderProperty: function(name, value) {
        // el stands for the element we're creating
        const el = document.createElement('span');
        el.classList.add(name);
        el.textContent = value + " ";
        el.setAttribute('title', value);
        return el;
    },

    makeDeleteButton: function() {
        const deleteButton = document.createElement('input')
        deleteButton.classList.add('deleteMe')
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("value", "Delete")
        deleteButton.onclick = function() {
            deleteButton.parentElement.remove();
            app.spellArray.splice(deleteButton.parentNode)
        }
        return deleteButton;

    },

    renderList: function(spell) {
        // ['name', 'level']
        const properties = Object.keys(spell);

        // collects an array of <span> elements
        const childElements = properties.map((prop) => {
            return this.renderProperty(prop, spell[prop])
        })

        const newList = document.createElement('li');
        newList.classList.add('spell');

        // appends each <span> to the <li> element created above
        childElements.forEach(function(el) {
            newList.appendChild(el)
        });
        newList.appendChild(this.makeDeleteButton())
        return newList;
    },

    changeWithSubmit: function(ev) {

        const f = ev.target;

        const spell = {
            name: f.yourSpell.value,
            description: f.yourDescription.value,
        }
        const val = Object.values(spell);
        this.spellArray.push(val[0]);
        console.log(this.spellArray);

        const newList = this.renderList(spell);

        const currentUl = document.querySelector('#spells');
        currentUl.appendChild(newList);

        f.reset();
    },

    changeWithDelete: function() {

    }
}
app.init();