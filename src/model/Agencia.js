import { Localizacao } from "./Localizacao.js";

class Agencia {
    id;
    nome;
    localizacao;
    status;

    /**
     * @param {Number} id identificador
     * @param {String} nome 
     * @param {Localizacao} localizacao localização geográfica da agência
     * @param {Status} status 
     */
    constructor(id, nome, localizacao, status) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        this.status = status;
    }
}

/** @typedef { String } Status status de uma agência */
/**
 * Possíveis status de uma agência
 * @property { Status } ATIVA
 * @property { Status } DESATIVADA
 */
Agencia.Status = {
    ATIVA: 'ATIVA',
    DESATIVADA: 'DESATIVADA'
}

export { Agencia }