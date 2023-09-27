import { Localizacao } from "./Localizacao.js";
import { Pagamento } from "./Pagamento.js";
import { Unidade } from "./Unidade.js";
import { Usuario } from "./Usuario.js";

class Pedido {
    id;
    unidade;
    categoria;
    pagamento;
    agendamento;
    previsaoInicioLocacao;
    previsaoHorasLocacao;
    usuario;
    status;

    /**
     * @param {Number} id identificador
     * @param {Unidade} unidade unidade em que o pedido foi efetuado
     * @param {Categoria} categoria 
     * @param {Pagamento} pagamento forma com que o usuário pagou pelo serviço de locação
     * @param {Date} agendamento
     * @param {Date} previsaoInicioLocacao previsão do início da locação
     * @param {Number} previsaoHorasLocacao quantidade de horas previstas que o carro estará em uso
     * @param {Usuario} usuario usuario que alugou um carro
     * @param {Status} status 
     */
    constructor(id, unidade, categoria, pagamento, agendamento, previsaoInicioLocacao, previsaoHorasLocacao, usuario, status) { // NOSONAR - todos os parâmetros são necessários
        this.id = id;
        this.unidade = unidade;
        this.categoria = categoria;
        this.pagamento = pagamento;
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
        pedido.unidade = new Unidade();
        pedido.unidade.localizacao = new Localizacao(); // TODO abstrair
        pedido.pagamento = new Pagamento();
        pedido.usuario = new Usuario();

        return pedido;
    }
}

/** @typedef {String} Categoria */
/**
 * @property {Categoria} DELIVERY modalidade de entrega de carros alugados em domicílio
 * @property {Categoria} RETIRADA modalidade de ir a uma unidade para alugar o carro
 */
Pedido.Categoria = {
    DELIVERY: 'DELIVERY',
    RETIRADA: 'RETIRADA'
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