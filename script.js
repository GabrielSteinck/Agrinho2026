/* ==========================
   ACESSIBILIDADE
========================== */

let tamanhoFonte = 16;

const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoContraste = document.getElementById("contraste");

botaoAumentar.addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

botaoDiminuir.addEventListener("click", () => {

    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

});

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

/* ==========================
   QUIZ
========================== */

function correta() {

    document.getElementById("resultado").innerHTML =
        "✅ Parabéns! Você acertou! A irrigação eficiente é uma das melhores formas de economizar água na agricultura.";

}

function errada() {

    document.getElementById("resultado").innerHTML =
        "❌ Resposta incorreta. Tente novamente e pense em como preservar a água.";

}
