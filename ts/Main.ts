namespace escola {
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAnoNasc") as HTMLInputElement;
    const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
    const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
    const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;

    const campoNota1 = document.getElementById("campoNota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("campoNota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("campoNota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("campoNota4") as HTMLInputElement;

    const btnCadastroAluno = document.getElementById("CadastroAluno") as HTMLButtonElement;
    const btnCalcularMedia = document.getElementById("CalcularMedia") as HTMLButtonElement;

    let aluno: Aluno;

    btnCadastroAluno.addEventListener("click", () => {
        aluno = new Aluno();

        aluno.nome = campoNome.value;
        aluno.anoNasc = parseInt(campoAno.value);
        aluno.cpf = campoCpf.value;
        aluno.endereco = campoEndereco.value;
        aluno.telefone = campoTelefone.value;
        aluno.matricula = parseInt(campoMatricula.value);
        aluno.curso = campoCurso.value;

        aluno.nota1 = parseFloat(campoNota1.value) || 0;
        aluno.nota2 = parseFloat(campoNota2.value) || 0;
        aluno.nota3 = parseFloat(campoNota3.value) || 0;
        aluno.nota4 = parseFloat(campoNota4.value) || 0;

       
        document.getElementById("nome")!.textContent = aluno.nome;
        document.getElementById("idade")!.textContent = aluno.calcularIdade(2025).toString();
        document.getElementById("AnoNAsc")!.textContent = aluno.anoNasc.toString();
        document.getElementById("cpf")!.textContent = aluno.cpf;
        document.getElementById("endereco")!.textContent = aluno.endereco;
        document.getElementById("telefone")!.textContent = aluno.telefone;
        document.getElementById("matricula")!.textContent = aluno.matricula.toString();
        document.getElementById("curso")!.textContent = aluno.curso;
    });

    btnCalcularMedia.addEventListener("click", () => {
        const media = aluno.calcularMedia();
        document.getElementById("Media")!.textContent = media.toFixed(2);
    });
}
