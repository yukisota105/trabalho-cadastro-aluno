"use strict";
var escola;
(function (escola) {
    class Pessoa {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        get cpf() {
            return this._cpf;
        }
        set cpf(cpf) {
            this._cpf = cpf;
        }
        get endereco() {
            return this._endereco;
        }
        set endereco(endereco) {
            this._endereco = endereco;
        }
        get telefone() {
            return this._telefone;
        }
        set telefone(telefone) {
            this._telefone = telefone;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
