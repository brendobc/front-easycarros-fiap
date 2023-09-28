import { Agencia } from "./Agencia.js";

class Carro {
    id;
    placa;
    categoria;
    modelo;
    cor;
    status;
    marca;
    agencia;

    /**
     * @param {Number} id identificador
     * @param {String} placa 
     * @param {Categoria} categoria 
     * @param {String} modelo 
     * @param {String} cor 
     * @param {Status} status 
     * @param {String} marca 
     * @param {Agencia} agencia 
     */
    constructor(id, placa, categoria, modelo, cor, status, marca, agencia) { // NOSONAR - todos os parâmetros são necessários
        this.id = id;
        this.placa = placa;
        this.categoria = categoria;
        this.modelo = modelo;
        this.cor = cor;
        this.status = status;
        this.marca = marca;
        this.agencia = agencia;
    }
}

/** @typedef {String} Categoria status que um carro pode possuir */
/**
 * @property {Categoria} A
 * @property {Categoria} B
 * @property {Categoria} C
 */
Carro.Categoria = {
    A: 'A',
    B: 'B',
    C: 'C'
}

/** @typedef {String} Status status que um carro pode possuir */
/**
 * @property {Status} DISPONIVEL
 * @property {Status} INDISPONIVEL
 * @property {Status} EM_USO
 * @property {Status} MANUTENCAO
 */
Carro.Status = {
    DISPONIVEL: 'DISPONIVEL',
    INDISPONIVEL: 'INDISPONIVEL',
    EM_USO: 'EM_USO',
    MANUTENCAO: 'MANUTENCAO'
}

export { Carro }