const whatsapp = document.getElementById("whatsapp");
const instagram = document.getElementById("instagram");
const gmail = document.getElementById("gmail");
const facebook = document.getElementById("facebook");
const youtube = document.getElementById("youtube");


//botoes ancoras redes sociais
function btn_redes(){
    //whatsapp
    let phone = 21978785267;
    whatsapp.addEventListener("click", function(){
        window.open(`https://wa.me/${phone}`, "_blank")
    });

    // Instagram
    instagram.addEventListener("click", function(){
        window.open(`https://www.instagram.com/klamil.ferramentas/`, "_blank")
    });

    //Gmail
    const email = "nuyensrodrigo@gmail.com";
    gmail.addEventListener("click", function(){
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")
    });
}
btn_redes();


// Carrosel
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000); // Muda a imagem a cada 3 segundos

// Inicialização
showSlide(currentIndex);


