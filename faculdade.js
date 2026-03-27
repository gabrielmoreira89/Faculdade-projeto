const slides =
document.querySelectorAll(".slide");
    let index = 0;
    
    function trocarSlide () {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }
    
    setInterval(trocarSlide, 5000);
    
    
function abrirMenu() {
    const menu = document.getElementById("menuOverlay");
    menu.classList.add("ativo");
}

function fecharMenu() {
    const menu = document.getElementById("menuOverlay");
    menu.classList.remove("ativo");
}
