const campoBusca = document.getElementById("buscar-curso");
const cursos = document.querySelectorAll(".curso");

campoBusca.addEventListener("input", function () {
  const textoDigitado = campoBusca.value.toLowerCase();

  cursos.forEach(function (curso) {
    const nomeCurso = curso.querySelector("h3").textContent.toLowerCase();

    if (nomeCurso.includes(textoDigitado)) {
      curso.style.display = "block";
    } else {
      curso.style.display = "none";
    }
  });
}); 