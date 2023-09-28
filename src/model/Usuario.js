class Usuario {
    id;
    nome;

    /*
    Propriedades comentadas pela falta de necessidade nesta demonstração

    cpf;
    dataNascimento;
    dataCriacao;
    telefone;
    email;
    senha;
    status;
    */

    /**
     * @param { Number } id identificador
     * @param { String } nome
     */
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    static getUsuarioMock() {
        return new Usuario(1, 'Larissah Pentecostal');
    }
}

export { Usuario }