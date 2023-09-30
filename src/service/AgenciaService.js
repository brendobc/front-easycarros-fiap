import { Agencia } from "../model/Agencia.js";
import { Localizacao } from "../model/Localizacao.js";

const localizacaoGenerica = new Localizacao(
    1,
    'Av. Paulista',
    '1106',
    'Bela Vista',
    'São Paulo',
    'São Paulo',
    '013311-000',
    '7º andar',
    'Shopping Cidade São Paulo'
);

/** Simula a resposta do back-end de agências disponíveis */
const agenciasDisponiveis = Object.freeze({
    1: new Agencia(1, 'Rent-N-Ride', localizacaoGenerica, Agencia.Status.ATIVA),
    2: new Agencia(2, 'EcoDrive Rent a Car', localizacaoGenerica, Agencia.Status.ATIVA),
    3: new Agencia(3, 'XpressDrive Car Rentals', localizacaoGenerica, Agencia.Status.ATIVA),
    4: new Agencia(4, 'VoyageRent Car Hire', localizacaoGenerica, Agencia.Status.ATIVA),
    5: new Agencia(5, 'UptownDrive Car Hire', localizacaoGenerica, Agencia.Status.ATIVA)
});

function getAgenciaById(id) {
    return agenciasDisponiveis[id];
}

export { agenciasDisponiveis, getAgenciaById }