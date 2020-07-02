"use strict";

function renderCoffee(coffee) {
    let html = '<div id="rendered_coffee" style="border: 6px solid lightslategray; border-radius: 15px; margin-bottom: 3em; background-color: linen">';
    html = html + '<div class="hidden">' + coffee.id + '</div>';
    html = html + coffee.img;
    html = html + '<h2><em>' + coffee.name + '</em></h2>';
    html = html + '<p>' + 'Roast: ' + coffee.roast + '</p>';
    html = html + '</h1>' + '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--){
        html = html + renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) { // Dynamically adjusts display based on roast type selected in dropdown
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffee2(e) { // Dynamically adjusts display based on letters typed in search bar
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedCoffee = searchBar.value;
    let filteredCoffees = [];
    coffees.filter(function(coffees) {
        if (coffees.roast.toLowerCase().match(selectedCoffee) || coffees.name.toLowerCase().match(selectedCoffee)) {
            filteredCoffees.push(coffees);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img: '<img src="coffee-mug-light.png" class="coffee-mug" alt=""/>'},
    {id: 2, name: 'Half City', roast: 'Light', img: '<img src="coffee-mug-light.png" class="coffee-mug" alt=""/>'},
    {id: 3, name: 'Cinnamon', roast: 'Light', img: '<img src="coffee-mug-light.png" class="coffee-mug" alt="">'},
    {id: 4, name: 'City', roast: 'Medium', img: '<img src="coffee-mug-medium.png" class="coffee-mug" alt="">'},
    {id: 5, name: 'American', roast: 'Medium', img: '<img src="coffee-mug-medium.png" class="coffee-mug" alt="">'},
    {id: 6, name: 'Breakfast', roast: 'Medium', img: '<img src="coffee-mug-medium.png" class="coffee-mug" alt="">'},
    {id: 7, name: 'High', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 8, name: 'Continental', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 9, name: 'New Orleans', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 10, name: 'European', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 11, name: 'Espresso', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 12, name: 'Viennese', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 13, name: 'Italian', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 14, name: 'French', roast: 'Dark', img: '<img src="coffee-mug-dark.png" class="coffee-mug" alt="">'},
    {id: 15, name: 'Colombian', roast: 'Medium', img: '<img src="coffee-mug-medium.png" class="coffee-mug" alt="">'}
];

coffees.reverse();
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let searchBar = document.querySelector('#search');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

searchBar.addEventListener('keyup', updateCoffee2);
submitButton.addEventListener('click', updateCoffees);
