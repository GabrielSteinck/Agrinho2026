/* =========================
   ACESSIBILIDADE
========================= */

let tamanhoFonte = 16;

const botaoAumentar = document.getElementById("aumentar-fonte");
const botaoDiminuir = document.getElementById("diminuir-fonte");
const botaoContraste = document.getElementById("alto-contraste");

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

/* =========================
   QUIZ
========================= */

const perguntas = [
    {
        pergunta: "1. Qual é uma forma sustentável de economizar água na agricultura?",
        opcoes: [
            "Irrigação eficiente",
            "Desperdício constante",
            "Poluição dos rios"
        ],
        correta: 0
    },

    {
        pergunta: "2. Por que a água é importante para a agricultura?",
        opcoes: [
            "Porque ajuda na produção de alimentos",
            "Porque aumenta a poluição",
            "Porque destrói plantações"
        ],
        correta: 0
    },

    {
        pergunta: "3. O desperdício de água pode causar:",
        opcoes: [
            "Problemas ambientais",
            "Mais preservação",
            "Mais chuvas"
        ],
        correta: 0
    },

    {
        pergunta: "4. O que deve ser preservado para garantir água no futuro?",
        opcoes: [
            "Nascentes e rios",
            "Lixões",
            "Áreas poluídas"
        ],
        correta: 0
    },

    {
        pergunta: "5. Qual é o objetivo da agricultura sustentável?",
        opcoes: [
            "Produzir alimentos e preservar o meio ambiente",
            "Desperdiçar recursos",
            "Aumentar a poluição"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const textoPergunta = document.getElementById("pergunta");
const botoesOpcao = document.querySelectorAll(".opcao");
const resultado = document.getElementById("resultado");

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    textoPergunta.textContent = pergunta.pergunta;

    botoesOpcao.forEach((botao, indice) => {

        botao.style.display = "block";

        botao.textContent = pergunta.opcoes[indice];

        botao.onclick = () => verificarResposta(indice);
    });
}

function verificarResposta(indiceEscolhido) {

    if (
        indiceEscolhido ===
        perguntas[perguntaAtual].correta
    ) {
        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        finalizarQuiz();

    }
}

function finalizarQuiz() {

    textoPergunta.textContent = "Quiz Finalizado!";

    botoesOpcao.forEach(botao => {
        botao.style.display = "none";
    });

    let mensagem = "";

    if (pontuacao === 5) {

        mensagem =
            "🌟 Parabéns! Você acertou todas as questões e demonstrou excelente conhecimento sobre sustentabilidade da água.";

    } else if (pontuacao >= 3) {

        mensagem =
            "✅ Muito bem! Você possui um bom conhecimento sobre o uso sustentável da água.";

    } else {

        mensagem =
            "📚 Continue estudando. A preservação da água é muito importante para o futuro da agricultura.";

    }

    resultado.innerHTML =
        `Você acertou <strong>${pontuacao}</strong> de ${perguntas.length} questões.<br><br>${mensagem}`;
}

carregarPergunta();
