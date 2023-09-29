import { Pedido } from "../model/Pedido.js";
import { Localizacao } from "../model/Localizacao.js";
import { setFirstDeepAttributeFound } from "../utils/attribute-setter.js";
import { getAgenciaById } from "./AgenciaService.js";

/**
 * Cria um objeto Pedido com os dados do formulário de novo pedido
 * @param {HTMLFormElement} formNovoPedido
 * @returns {Pedido}
 */
function criarPedido(formNovoPedido) {
    let localizacao, agencia, categoria, valor, modoPagamento, agendamento, previsaoDiasLocacao;

    const sectionLogradouro = formNovoPedido.querySelector('#section-localizacao');
    const agenciaId = document.getElementById('agenciaId');

    if(sectionLogradouro) {
        localizacao = new Localizacao(1); 

        for(const dadoLocalizacao of sectionLogradouro.querySelectorAll('input')) {
            if(!dadoLocalizacao.value) continue;

            setFirstDeepAttributeFound(localizacao, dadoLocalizacao.name, dadoLocalizacao.value);
        }

        categoria = Pedido.Categoria.DELIVERY;
    } else if(agenciaId) {
        agencia = getAgenciaById(agenciaId.value);
        categoria = Pedido.Categoria.RETIRADA;
    }
    
    previsaoDiasLocacao = document.getElementById('dias-locacao').value;
    valor = (Math.random() * 200 * Number(previsaoDiasLocacao) + 50).toFixed(2);
    modoPagamento = Pedido.ModoPagamento.CARTAO_CREDITO;
    agendamento = new Date(); // TODO ajustar estrutura de agendamentos

    return new Pedido(
        null, localizacao, agencia, categoria, valor, modoPagamento, agendamento, previsaoDiasLocacao
    );
}

export { criarPedido }