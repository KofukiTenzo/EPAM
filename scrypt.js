const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');


selectEl.addEventListener('change', function() {

switch(true) {
    case this.value === 'mercury' : registrationImage.src = "./Assets/Mercury.svg";
    break;
    case this.value === 'uranus' : registrationImage.src = "./Assets/Uran.svg";
    break;
    case this.value === 'neptune' : registrationImage.src = "./Assets/Neptun.svg";
    break;
    case this.value === 'venus' : registrationImage.src = "./Assets/Vinera.svg";
    break;
    case this.value === 'mars' : registrationImage.src = "./Assets/Mars.svg";
    break;
    case this.value === 'earth' : registrationImage.src = "./Assets/Earth.svg";
    break;
    default: setSneakyRicardo(this); 
}
})

button.addEventListener('click', function() {
    console.log(this.className);
    this.classList.toggle('form-submit-button');
})