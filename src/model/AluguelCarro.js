import { Carro } from "./Carro";
import { Pedido } from "./Pedido";

class AluguelCarro {
    id;
    pedido;
    inicio;
    previsaoDiasLocacao;
    dataDevolucaoCarro;
    carro;
    status;

    /**
     * @param {Number} id identificador
     * @param {Pedido} pedido pedido de locação referente ao aluguel de carro
     * @param {Carro} carro carro alugado
     * @param {Date} inicio início da locação
     * @param {Number} previsaoDiasLocacao quantidade em dias previstas para o aluguel durar
     * @param {Date} dataDevolucaoCarro 
     */
    constructor(id, pedido, carro, inicio, previsaoDiasLocacao, dataDevolucaoCarro) {
        this.id = id;
        this.pedido = pedido;
        this.carro = carro;
        this.inicio = inicio;
        this.previsaoDiasLocacao = previsaoDiasLocacao;
        this.dataDevolucaoCarro = dataDevolucaoCarro;
        this.status = AluguelCarro.Status.EM_VIGOR;
    }
}

/** @typedef {String} Status */
/**
 * @property {Status} EM_VIGOR
 * @property {Status} VENCIDO
 * @property {Status} FINALIZADO
 */
AluguelCarro.Status = {
    EM_VIGOR: 'EM_VIGOR',
    VENCIDO: 'VENCIDO',
    FINALIZADO: 'FINALIZADO'
}

export { AluguelCarro }