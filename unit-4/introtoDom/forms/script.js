// Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];


//TODO Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(form[0].value);
    console.log(form.sex.value);

    let species = form[0].value;
    let name = form[1].value;
    let sex = form.sex.value;

    // console.log('species: ', species);
    // console.log('name: ', name);

    let animal = {
        species: species,
        name: name,
        sex: sex
    };


    animals.push(animal);
    buildTable();
    // console.log(animals);
    form.reset();
    form.species.focus();
});


//TODO Display to Table (function)
function buildTable() {
    console.log('In buildTable: ', animals);
    console.log(table.firstChild);
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


    animals.forEach((a, i) => {
        console.log(a.name);
        //* 3 steps to displaying to the DOM
        // CREATE
        /* 
            row
                - data: Pos, name sex species
        */
        let tr = document.createElement('tr');
        let pos = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');


        //    ! apply values

        pos.textContent = i + 1;
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;
        // ! append

        tr.appendChild(pos);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);

    })
}