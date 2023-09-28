import { Localizacao } from "./Localizacao.js";
import { Agencia } from "./Agencia.js";
import { Usuario } from "./Usuario.js";

class Pedido {
    id;
    agencia;
    categoria;
    valor;
    modoPagamento;
    agendamento;
    previsaoInicioLocacao;
    previsaoHorasLocacao;
    usuario;
    status;

    /**
     * @param {Number} id identificador
     * @param {Agencia} agencia agencia em que o pedido foi efetuado
     * @param {Categoria} categoria 
     * @param {Number} valor
     * @param {ModoPagamento} modoPagamento
     * @param {Date} agendamento
     * @param {Date} previsaoInicioLocacao previsão do início da locação
     * @param {Number} previsaoHorasLocacao quantidade de horas previstas que o carro estará em uso
     * @param {Usuario} usuario usuario que alugou um carro
     * @param {Status} status 
     */
    constructor(id, agencia, categoria, valor, modoPagamento, agendamento, previsaoInicioLocacao, previsaoHorasLocacao, usuario, status) { // NOSONAR - todos os parâmetros são necessários
        this.id = id;
        this.agencia = agencia;
        this.categoria = categoria;
        this.valor = valor;
        this.modoPagamento = modoPagamento;
        this.agendamento = agendamento;
        this.previsaoInicioLocacao = previsaoInicioLocacao;
        this.previsaoHorasLocacao = previsaoHorasLocacao;
        this.usuario = usuario;
        this.status = status;
    }

    // TODO completar JSDoc
    /**
     * @returns {Pedido}
     */
    static criarInstanciaObjetosPreenchidos() {
        const pedido = new Pedido();
        pedido.agencia = new Agencia();
        pedido.agencia.localizacao = new Localizacao(); // TODO abstrair
        pedido.usuario = new Usuario();

        return pedido;
    }
}

/** @typedef {String} Categoria */
/**
 * @property {Categoria} DELIVERY modalidade de entrega de carros alugados em domicílio
 * @property {Categoria} RETIRADA modalidade de ir a uma agencia para alugar o carro
 */
Pedido.Categoria = {
    DELIVERY: 'DELIVERY',
    RETIRADA: 'RETIRADA'
}

/** @typedef {String} ModoPagamento */
/** @property {ModoPagamento} CARTAO_CREDITO */
Pedido.ModoPagamento = {
    CARTAO_CREDITO: 'CARTAO_CREDITO'
}

/** @typedef {String} Status */
/**
 * @property {Status} EM_ANDAMENTO
 * @property {Status} FINALIZADO
 * @property {Status} CANCELADO
 */
Pedido.Status = {
    EM_ANDAMENTO: 'EM_ANDAMENTO',
    FINALIZADO: 'FINALIZADO',
    CANCELADO: 'CANCELADO'
}

export { Pedido }