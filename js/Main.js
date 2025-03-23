"use strict";
var escola;
(function (escola) {
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCpf = document.getElementById("campoCpf");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTelefone = document.getElementById("campoTelefone");
    const campoMatricula = document.getElementById("campoMatricula");
    const campoCurso = document.getElementById("campoCurso");
    const campoNota1 = document.getElementById("campoNota1");
    const campoNota2 = document.getElementById("campoNota2");
    const campoNota3 = document.getElementById("campoNota3");
    const campoNota4 = document.getElementById("campoNota4");
    const btnCadastroAluno = document.getElementById("CadastroAluno");
    const btnCalcularMedia = document.getElementById("CalcularMedia");
    let p;
    btnCadastroAluno.addEventListener("click", () => {
        p = new escola.Aluno;
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("cpf").textContent = p.cpf;
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("media").textContent = p.calcularMedia.toString();
    });
})(escola || (escola = {}));
