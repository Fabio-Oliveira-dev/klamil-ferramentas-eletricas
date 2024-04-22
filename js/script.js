const carrosel_img = document.querySelectorAll('.carrosel-item');
const carrosel_btn_voltar = document.getElementById('carrosel-btn-voltar');
const carrosel_btn_avancar = document.getElementById('carrosel-btn-avancar');

let carroselSlider = 0;

function removerSlider(){
    carrosel_img.forEach(item => item.classList.remove('on'))
}

function mostrarSlider(){
    carrosel_img[carroselSlider].classList.add('on')
}

function avancarSlider(){
    removerSlider()
    if(carroselSlider === carrosel_img.length -1){
        carroselSlider = 0
    } else {
        carroselSlider++
    }
    mostrarSlider()
}

function voltarSlider(){
    removerSlider()
    if(carroselSlider === 0){
        carroselSlider = carrosel_img.length -1
    } else {
        carroselSlider--
    }
    mostrarSlider()
}

carrosel_btn_avancar.addEventListener('click', avancarSlider);
carrosel_btn_voltar.addEventListener('click', voltarSlider);