// ========== FUNCIONALIDADES DO SITE ==========

// 1. QUIZ SOBRE SUSTENTABILIDADE DA ÁGUA
// Perguntas e opções
const perguntas = [
    {
        texto: "1. Qual é a porcentagem aproximada de água doce consumida pela agricultura no mundo?",
        opcoes: ["30%", "50%", "70%", "90%"],
        correta: 2 // índice 2 = 70%
    },
    {
        texto: "2. Qual técnica de irrigação é mais eficiente para evitar o desperdício de água?",
        opcoes: ["Irrigação por inundação", "Irrigação por gotejamento", "Aspersão convencional", "Canal aberto"],
        correta: 1
    },
    {
        texto: "3. O que é uma prática sustentável para economizar água na agricultura?",
        opcoes: ["Desviar rios", "Usar água potável para tudo", "Captar água da chuva", "Irrigar ao meio-dia"],
        correta: 2
    },
    {
        texto: "4. Por que o desperdício de água na agricultura é um problema ambiental?",
        opcoes: ["Porque sobra pouca água para as cidades", "Porque afeta rios e nascentes", "Porque deixa o solo mais fértil", "Porque ajuda as plantas"],
        correta: 1
    },
    {
        texto: "5. Qual destes ajuda a monitorar a necessidade real de água no solo?",
        opcoes: ["Sensores de umidade", "Barragens", "Fogos de artifício", "Adubação química"],
        correta: 0
    }
];

// Função para carregar o quiz no HTML
function carregarQuiz() {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    let html = "";
    for (let i = 0; i < perguntas.length; i++) {
        const p = perguntas[i];
        html += `<div class="pergunta">`;
        html += `<p>${p.texto}</p>`;
        for (let j = 0; j < p.opcoes.length; j++) {
            html += `<label>
                        <input type="radio" name="q${i}" value="${j}">
                        ${p.opcoes[j]}
                     </label><br>`;
        }
        html += `</div>`;
    }
    container.innerHTML = html;
}

// Função para corrigir o quiz
function corrigirQuiz() {
    let acertos = 0;
    for (let i = 0; i < perguntas.length; i++) {
        const opcoes = document.getElementsByName(`q${i}`);
        let selecionado = -1;
        for (let j = 0; j < opcoes.length; j++) {
            if (opcoes[j].checked) {
                selecionado = j;
                break;
            }
        }
        if (selecionado === perguntas[i].correta) {
            acertos++;
        }
    }
    const resultado = document.getElementById("resultadoQuiz");
    resultado.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas. 
    ${acertos === 5 ? "🌱 Parabéns! Você é um guardião da água!" : "💧 Continue aprendendo para evitar o desperdício!"}`;
}

// 2. FUNÇÕES DE ACESSIBILIDADE
let tamanhoFonteAtual = 100; // em %

function aumentarFonte() {
    if (tamanhoFonteAtual < 140) {
        tamanhoFonteAtual += 10;
        document.body.style.fontSize = tamanhoFonteAtual + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonteAtual > 80) {
        tamanhoFonteAtual -= 10;
        document.body.style.fontSize = tamanhoFonteAtual + "%";
    }
}

function ativarAltoContraste() {
    document.body.classList.toggle("alto-contraste");
}

// 3. EVENTOS E INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function() {
    // Carregar o quiz
    carregarQuiz();

    // Botão enviar quiz
    const btnEnviar = document.getElementById("enviarQuiz");
    if (btnEnviar) {
        btnEnviar.addEventListener("click", corrigirQuiz);
    }

    // Botões de acessibilidade
    const btnAumentar = document.getElementById("aumentarFonte");
    const btnDiminuir = document.getElementById("diminuirFonte");
    const btnContraste = document.getElementById("altoContraste");

    if (btnAumentar) btnAumentar.addEventListener("click", aumentarFonte);
    if (btnDiminuir) btnDiminuir.addEventListener("click", diminuirFonte);
    if (btnContraste) btnContraste.addEventListener("click", ativarAltoContraste);
});
