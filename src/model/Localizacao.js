class Localizacao {
    id;
    logradouro;
    numero;
    bairro;
    cidade;
    estado;
    cep;
    complemento;
    pontoReferencia;

    constructor(id, logradouro, numero, bairro, cidade, estado, cep, complemento, pontoReferencia) { // NOSONAR - todos os parâmetros são necessários
        this.id = id;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.complemento = complemento;
        this.pontoReferencia = pontoReferencia;
    }
}

export { Localizacao }