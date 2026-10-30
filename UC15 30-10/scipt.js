const formulario = document.querySelector("#formNotas");

const nome = document.querySelector("#nome");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");

const resultado = document.querySelector("#resultado");
const nomeResultado = document.querySelector("#nomeResultado");
const mediaResultado = document.querySelector("#mediaResultado");
const situacaoResultado = document.querySelector("#situacaoResultado");

const mensagemErro = document.querySelector("#mensagemErro");
const btnLimpar = document.querySelector("#btnLimpar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    mensagemErro.textContent = "";
    resultado.hidden = true;

    const nomeEstudante = nome.value.trim();

    if (nomeEstudante === "") {
        mensagemErro.textContent = "Por favor, informe o nome do estudante.";
        nome.focus();
        return;
    }

    const valorNota1 = nota1.value.trim();
    const valorNota2 = nota2.value.trim();
    const valorNota3 = nota3.value.trim();

    if (
        valorNota1 === "" ||
        valorNota2 === "" ||
        valorNota3 === ""
    ) {
        mensagemErro.textContent = "Preencha todas as três notas.";
        return;
    }

    const n1 = Number(valorNota1);
    const n2 = Number(valorNota2);
    const n3 = Number(valorNota3);

    if (
        !Number.isFinite(n1) ||
        !Number.isFinite(n2) ||
        !Number.isFinite(n3) ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        mensagemErro.textContent = "As notas devem ser números entre 0 e 10.";
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    let situacao = "";
    let classeSituacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
        classeSituacao = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classeSituacao = "recuperacao";
    } else {
        situacao = "Reprovado";
        classeSituacao = "reprovado";
    }

    nomeResultado.textContent = "Estudante: " + nomeEstudante;

    mediaResultado.textContent = media.toFixed(2).replace(".", ",");

    situacaoResultado.textContent = situacao;
    situacaoResultado.className = "situacao " + classeSituacao;

    resultado.hidden = false;
});

btnLimpar.addEventListener("click", function() {
    formulario.reset();

    resultado.hidden = true;
    mensagemErro.textContent = "";

    nome.focus();
});