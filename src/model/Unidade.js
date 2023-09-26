import { Localizacao } from "./Localizacao";

class Unidade {
    id;
    nome;
    localizacao;
    status;

    /**
     * @param {Number} id identificador
     * @param {String} nome 
     * @param {Localizacao} localizacao localização geográfica da unidade
     * @param {Status} status 
     */
    constructor(id, nome, localizacao, status) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        this.status = status;
    }
}

/** @typedef { String } Status status de uma unidade */
/**
 * Possíveis status de uma unidade
 * @property { Status } ATIVA
 * @property { Status } DESATIVADA
 */
Unidade.Status = {
    ATIVA: 'ATIVA',
    DESATIVADA: 'DESATIVADA'
}

export { Unidade }