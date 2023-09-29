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
    previsaoDiasLocacao;
    usuario;
    status;

    /**
     * @param {Number} id identificador
     * @param {Localizacao} localizacao endereço para realizar o delivery
     * @param {Agencia} agencia agencia em que o pedido foi efetuado
     * @param {Categoria} categoria 
     * @param {Number} valor
     * @param {ModoPagamento} modoPagamento
     * @param {Date} agendamento
     * @param {Number} previsaoDiasLocacao quantidade de dias previstas que o carro estará em uso
     * @param {Status} status 
     */
    constructor(id, localizacao, agencia, categoria, valor, modoPagamento, agendamento, previsaoDiasLocacao) { // NOSONAR - todos os parâmetros são necessários
        this.id = id;
        this.localizacao = localizacao;
        this.agencia = agencia;
        this.categoria = categoria;
        this.valor = valor;
        this.modoPagamento = modoPagamento;
        this.agendamento = agendamento;
        this.previsaoDiasLocacao = previsaoDiasLocacao;
        this.status = Pedido.Status.EM_ANDAMENTO;
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