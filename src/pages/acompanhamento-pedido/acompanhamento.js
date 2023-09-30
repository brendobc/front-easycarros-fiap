import { getPedidoSalvo } from "../../service/storage.js";

console.log('Teste tela acompanhar pedido');

function initConsultaAcompanhamento() {
    const categoriaPlaceholder = document.getElementById('categoria');
    const valorPlaceholder = document.getElementById('valor');
    const modoPagamentoPlaceholder = document.getElementById('modoPagamento');
    const agendamentoPlaceholder = document.getElementById('agendamento');
    const previsaoDiasLocacaoPlaceholder = document.getElementById('previsaoDiasLocacao');
    const nomePlaceholder = document.getElementById('nome');
    const statusPlaceholder = document.getElementById('status');
    const emptyPlaceHolder = document.getElementById('empty');
    
    var consultaPedido = getPedidoSalvo();

    if (!consultaPedido) {
        return emptyPlaceHolder.innerText = "empty space";
    }

    const data = new Date(consultaPedido.agendamento);

    var dataFormatada = data.toLocaleDateString();

    categoriaPlaceholder.innerText = consultaPedido.categoria;
    valorPlaceholder.innerText = consultaPedido.valor;
    nomePlaceholder.innerText = consultaPedido.usuario.nome;
    modoPagamentoPlaceholder.innerText = consultaPedido.modoPagamento;
    agendamentoPlaceholder.innerText = dataFormatada;
    previsaoDiasLocacaoPlaceholder.innerText = consultaPedido.previsaoDiasLocacao;
    
    statusPlaceholder.innerText = consultaPedido.status;
}

export {  initConsultaAcompanhamento  }