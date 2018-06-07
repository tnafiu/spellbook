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
    init: function() {
        this.template = document.querySelector('.spell.template')
        this.spells = []

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

    renderList: function(spell) {
        const listItem = this.template.cloneNode(true)
        listItem.classList.remove('template')

        // ['name', 'level']
        const properties = Object.keys(spell);

        properties.forEach(property => {
            const el = listItem.querySelector(`.${property}`)
            if (el) {
                el.textContent = spell[property]
                el.setAttribute('title', spell[property])
            }
        })

        // Functionality for the delete button
        listItem
            .querySelector(button.delete)
            .addEventListener(
                'click',
                this.removeSpell.bind(this, spell)
            )

        // Functionality for the favourite button
        listItem
            .querySelector(button.fav)
            .addEventListener(
                'click',
                this.favToggle.bind(this, spell)
            )

        return listItem;
    },

    removeSpell: function(ev) {
        // Removes the spell from the DOM
        const button = ev.target
        const item = button.closest('.spell')
        item.parentNode.removeChild(item)

        // Removes the spell from the array
        const i = this.spells.indexOf(spell)
        this.spells.splice(i, 1)
    },

    favToggle: function() {
        console.log("I like it!")
        const button = ev.target
        const item = button.closest('.spell')
        spell.favourite = item.classList.toggle('fav')
    },

    moveDown: function(spell, ev) {
        // find the <li>
        const button = ev.target
        const item = button.closest('.spell')

        // find it in the array
        const i = this.spells.indexOf(spell)
    },

    changeWithSubmit: function(ev) {

        const f = ev.target;

        const spell = {
            name: f.yourSpell.value,
            description: f.yourDescription.value,
            favourite: false,
        }

        this.spells.push(spell)

        const newList = this.renderList(spell);

        const currentUl = document.querySelector('#spells');
        currentUl.appendChild(newList);

        f.reset();
    },

    changeWithDelete: function() {

    }
}
app.init();