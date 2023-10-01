import { getPedidoSalvo, removePedido } from "../../service/storage.js";
const linkNovoPedido = document.getElementById('linkNovoPedido')
const categoriaPlaceholder = document.getElementById('categoria');
const valorPlaceholder = document.getElementById('valor');
const modoPagamentoPlaceholder = document.getElementById('modoPagamento');
const agendamentoPlaceholder = document.getElementById('agendamento');
const previsaoDiasLocacaoPlaceholder = document.getElementById('previsaoDiasLocacao');
const nomeUsuarioPlaceholder = document.getElementById('nomeUsuario');
const statusPlaceholder = document.getElementById('status');
const emptyPlaceHolder = document.getElementById('empty');
const logradouroPlaceHolder = document.getElementById('logradouro');
const numeroPlaceHolder = document.getElementById('numero');
const bairroPlaceHolder = document.getElementById('bairro');
const cidadePlaceHolder = document.getElementById('cidade');
const estadoPlaceHolder = document.getElementById('estado');
const cepPlaceHolder = document.getElementById('cep');
const complementoPlaceHolder = document.getElementById('complemento');
const pontoReferenciaPlaceHolder = document.getElementById('pontoReferencia');
const nomeAgenciaPlaceHolder = document.getElementById('nomeAgencia');
const btnConfirmarEntrega = document.getElementById('btn-confirmar-entrega');

function initConsultaAcompanhamento() {

    var consultaPedido = getPedidoSalvo();

    if (!consultaPedido) {
        const numeroPedidoLabel = document.getElementById('numeroPedidoLabel');
        const statusLabel = document.getElementById('statusLabel');
        const categoriaLabel = document.getElementById('categoriaLabel');
        const valorLabel = document.getElementById('valorLabel');
        const modoPagamentoLabel = document.getElementById('modoPagamentoLabel');
        const agendamentoLabel = document.getElementById('agendamentoLabel');
        const previsaoDiasLocacaoLabel = document.getElementById('previsaoDiasLocacaoLabel');
        const nomeUsuarioLabel = document.getElementById('nomeUsuarioLabel');
        const logradouroLabel = document.getElementById('logradouroLabel');
        const numeroLabel = document.getElementById('numeroLabel');
        const bairroLabel = document.getElementById('bairroLabel');
        const cidadeLabel = document.getElementById('cidadeLabel');
        const estadoLabel = document.getElementById('estadoLabel');
        const cepLabel = document.getElementById('cepLabel');
        const complementoLabel = document.getElementById('complementoLabel');
        const pontoReferenciaLabel = document.getElementById('pontoReferenciaLabel');
        const nomeAgenciaLabel = document.getElementById('nomeAgenciaLabel');
        const linkNovoPedido = document.getElementById('linkNovoPedido');

        numeroPedidoLabel.style.display = 'none';
        statusLabel.style.display = 'none';
        categoriaLabel.style.display = 'none';
        valorLabel.style.display = 'none';
        modoPagamentoLabel.style.display = 'none';
        agendamentoLabel.style.display = 'none';
        previsaoDiasLocacaoLabel.style.display = 'none';
        nomeUsuarioLabel.style.display = 'none';
        logradouroLabel.style.display = 'none';
        numeroLabel.style.display = 'none';
        bairroLabel.style.display = 'none';
        cidadeLabel.style.display = 'none';
        estadoLabel.style.display = 'none';
        cepLabel.style.display = 'none';
        complementoLabel.style.display = 'none';
        pontoReferenciaLabel.style.display = 'none';
        nomeAgenciaLabel.style.display = 'none';
        emptyPlaceHolder.innerText = "Nenhum pedido disponível ";
        btnConfirmarEntrega.style.display = 'none';
        return linkNovoPedido.innerText = 'Novo pedido'
    }

    linkNovoPedido.style.display = 'none';
    
    const agendamento = new Date(consultaPedido.agendamento);

    var dataFormatada = `${agendamento.toLocaleDateString('pt-BR')} - ${agendamento.getHours()}:${agendamento.getMinutes()}`;

    categoriaPlaceholder.innerText = consultaPedido.categoria;
    valorPlaceholder.innerText = consultaPedido.valor;
    nomeUsuarioPlaceholder.innerText = consultaPedido.usuario.nome;
    modoPagamentoPlaceholder.innerText = consultaPedido.modoPagamento;
    agendamentoPlaceholder.innerText = dataFormatada;
    previsaoDiasLocacaoPlaceholder.innerText = consultaPedido.previsaoDiasLocacao;  
    statusPlaceholder.innerText = consultaPedido.status;

    switch (consultaPedido.categoria) {
        case 'DELIVERY':
            return formataDelivery(consultaPedido.localizacao);
        case 'RETIRADA':
            return formataRetirada(consultaPedido.agencia);
    }
}

function formataDelivery (localizacao) {
    const nomeAgenciaLabelPlaceholder = document.getElementById('nomeAgenciaLabel');
    nomeAgenciaLabelPlaceholder.style.display = 'none';
    logradouroPlaceHolder.innerText = localizacao.logradouro;
    numeroPlaceHolder.innerText = localizacao.numero;
    bairroPlaceHolder.innerText = localizacao.bairro;
    cidadePlaceHolder.innerText = localizacao.cidade;
    estadoPlaceHolder.innerText = localizacao.estado;
    cepPlaceHolder.innerText = localizacao.cep;
    complementoPlaceHolder.innerText = localizacao.complemento;
    pontoReferenciaPlaceHolder.innerText = localizacao.pontoReferencia;
}

function formataRetirada(agencia) {
    nomeAgenciaPlaceHolder.innerText = agencia.nome;
    logradouroPlaceHolder.innerText = agencia.localizacao.logradouro;
    numeroPlaceHolder.innerText = agencia.localizacao.numero;
    bairroPlaceHolder.innerText = agencia.localizacao.bairro;
    cidadePlaceHolder.innerText = agencia.localizacao.cidade;
    estadoPlaceHolder.innerText = agencia.localizacao.estado;
    cepPlaceHolder.innerText = agencia.localizacao.cep;
    complementoPlaceHolder.innerText = agencia.localizacao.complemento;
    pontoReferenciaPlaceHolder.innerText = agencia.localizacao.pontoReferencia;
}

function initConfirmarEntrega() {
    btnConfirmarEntrega.addEventListener('click', function () {
        removePedido();
    })
}

export {  initConsultaAcompanhamento , initConfirmarEntrega }