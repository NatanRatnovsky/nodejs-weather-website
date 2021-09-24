console.log('Client JavaScript file is loaded!');



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message = document.querySelector('#message');
const forecast = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (e) => {

    // e.preventDefault is prevent browser refresh a page after submit.
    e.preventDefault();

    const location = search.value;

    message.textContent = 'Loading...';
    forecast.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent = data.error;
                forecast.textContent = '';
            } else {
                message.textContent = data.location;
                forecast.textContent = data.forecast;
            }
        });
    });
});
