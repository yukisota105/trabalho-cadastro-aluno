"use strict";
var escola;
(function (escola) {
    class Aluno extends escola.Pessoa {
        get matricula() { return this._matricula; }
        set matricula(matricula) { this._matricula = matricula; }
        get curso() { return this._curso; }
        set curso(curso) { this._curso = curso; }
        get nota1() { return this._nota1; }
        set nota1(nota) { this._nota1 = nota; }
        get nota2() { return this._nota2; }
        set nota2(nota) { this._nota2 = nota; }
        get nota3() { return this._nota3; }
        set nota3(nota) { this._nota3 = nota; }
        get nota4() { return this._nota4; }
        set nota4(nota) { this._nota4 = nota; }
        calcularMedia() {
            return (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
        }
    }
    escola.Aluno = Aluno;
})(escola || (escola = {}));
