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

    const sectionLogradouro = formNovoPedido.querySelector('#section-localizacao'),
          inputAgendamento = formNovoPedido.querySelector('#agendamento'),
          agenciaId = document.getElementById('agenciaId'),
          selectFormaPagamentoCartao = document.getElementById('formaPagamentoCartao'),
          selectCategoriaPedido = document.getElementById('select-categoria-pedido');

    if(selectCategoriaPedido.value === Pedido.Categoria.DELIVERY) {
        localizacao = new Localizacao(1); 

        for(const dadoLocalizacao of sectionLogradouro.querySelectorAll('input')) {
            if(!dadoLocalizacao.value) continue;

            setFirstDeepAttributeFound(localizacao, dadoLocalizacao.name, dadoLocalizacao.value);
        }

        categoria = Pedido.Categoria.DELIVERY;
    } else if(selectCategoriaPedido.value === Pedido.Categoria.RETIRADA) {
        agencia = getAgenciaById(agenciaId.value);
        categoria = Pedido.Categoria.RETIRADA;
    }
    
    previsaoDiasLocacao = document.getElementById('dias-locacao').value;
    valor = (Math.random() * 200 * Number(previsaoDiasLocacao) + 50).toFixed(2);
    modoPagamento = selectFormaPagamentoCartao.value;
    agendamento = new Date(inputAgendamento.value); // TODO ajustar estrutura de agendamentos

    return new Pedido(
        null, localizacao, agencia, categoria, valor, modoPagamento, agendamento, previsaoDiasLocacao
    );
}

// TODO JSDoc
function getAgendamentosDisponiveis() {
    const hoje = new Date(),
          agendamentos = [hoje, new Date(hoje), new Date(hoje), new Date(hoje), new Date(hoje), new Date(hoje)];

    // ignora o primeiro elemento da lista
    for(let i=1; i < agendamentos.length; i++) {
        const horaAgendamento = agendamentos[i - 1].getHours() + 1;

        // Se for depois das 18h, manda para o dia seguinte
        if(horaAgendamento >= 8 && horaAgendamento <= 18) {
            agendamentos[i].setHours(horaAgendamento);
            continue;
        } else if(horaAgendamento > 18) {
            const novaData = agendamentos[i].getDate() + 1;

            for(const agendamentoNovaData of agendamentos) {
                agendamentoNovaData.setDate(novaData);
                agendamentoNovaData.setMinutes(10);
            }
        }

        agendamentos[i].setHours(8);
        agendamentos[i].setMinutes(10);
    }
    // atenzione, atenzione! Aqui, a variável "hoje" já não corresponde ao presente momento

    agendamentos.shift();

    return agendamentos;
}

export { criarPedido, getAgendamentosDisponiveis }