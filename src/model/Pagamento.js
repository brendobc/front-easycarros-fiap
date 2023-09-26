class Pagamento {
    id;
    modo;
    valor;
    data;

    /**
     * @param {Number} id identificador
     * @param {Modo} modo maneira pela qual o pagamento foi efetuado
     * @param {Number} valor 
     * @param {Date} data 
     */
    constructor(id, modo, valor, data) {
        this.id = id;
        this.modo = modo;
        this.valor = valor;
        this.data = data;
    }
}

/** @typedef {String} Modo */
/** @property {Modo} CARTAO_CREDITO */
Pagamento.Modo = {
    CARTAO_CREDITO: 'CARTAO_CREDITO'
}

export { Pagamento }