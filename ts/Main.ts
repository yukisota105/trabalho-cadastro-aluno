namespace escola {
    const campoNome = document.getElementById("campoNome") as HTMLInputElement
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
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

    let p: Aluno;

    btnCadastroAluno.addEventListener("click",()=>{
        p = new Aluno;
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("cpf").textContent = p.cpf;
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("media").textContent = p.calcularMedia.toString();



    })

}