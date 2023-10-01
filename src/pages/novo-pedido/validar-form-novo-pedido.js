import { Pedido } from "../../model/Pedido.js";
import { criarPedido } from "../../service/novoPedidoService.js";
import { salvarPedido } from "../../service/storage.js";

const btnSelecionarAgencia = document.querySelector('[data-selecionar="agencia"]'),
      inputAgenciaSelecionada = document.getElementById('agenciaId'),
      btnSelecionarAgendamento = document.querySelector('[data-selecionar="agendamento"]'),
      inputAgendamentoSelecionado = document.getElementById('agendamento'),
      selectCategoriaPedido = document.getElementById('select-categoria-pedido'),
      formNovoPedido = document.getElementById('form-novo-pedido');

function validarCampoHiddenComModal(input, btnAbrirModal, force = false) {
    if(
        force ||
        !input ||
        input.value
    ) {
        btnAbrirModal.classList.remove('error');
        return true;
    }

    btnAbrirModal.classList.add('error');
    return false;
}

function validarCategoriaCarro(form, force = false) {
    const radiosCategoria = form.querySelectorAll('[name="categoria"]'),
          labelCategoriaError = form.querySelector('#categoria-error');

    if(
        force ||
        Array.prototype.filter.call(radiosCategoria, (radio) => {
            radio.classList.remove('error')
            return radio.checked;
        }).length === 1
    ) {
        labelCategoriaError.style.display = 'none';
        return true;
    }

    Array.prototype.find.call(radiosCategoria, (radio) => radio.classList.add('error'));
    labelCategoriaError.style.display = 'block';
    labelCategoriaError.innerText = 'É preciso selecionar ao menos uma categoria';
    return false;
}

function validarCampos(force = false) {
    return [
        selectCategoriaPedido.value === Pedido.Categoria.DELIVERY ||
            validarCampoHiddenComModal(inputAgenciaSelecionada, btnSelecionarAgencia, force),
        validarCampoHiddenComModal(inputAgendamentoSelecionado, btnSelecionarAgendamento, force),
        validarCategoriaCarro(formNovoPedido, force)
    ]
    .includes(false);
}

function inserirValidadorFormNovoPedido() {
    $(formNovoPedido).validate({
        ignore: ['hidden', 'disabled'],
        submitHandler: function(_form, e) {
            e.preventDefault();

            if(validarCampos()) {
                return;
            }

            salvarPedido(criarPedido(formNovoPedido));
            window.location.href = './acompanhamento.html';
        }
    });
}

function initValidacaoNovoPedido() {
    inserirValidadorFormNovoPedido();
}

export { initValidacaoNovoPedido, validarCampos }