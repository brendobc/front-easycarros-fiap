import { Pedido } from "../../model/Pedido.js";
import { validarCampos } from "./validar-form-novo-pedido.js";

const sectionAgencia = document.getElementById('section-agencia'),
      sectionLocalizacao = document.getElementById('section-localizacao');

/**
 * @this {HTMLSelectElement}
 */
function toggleVisibilidadeCamposDeliveryRetirada() {
    const isDelivery = this.value === Pedido.Categoria.DELIVERY,
          inputAgendamentoId = document.getElementById('agendamento'),
          agendamentoPlaceholder = document.getElementById('agendamento-selecionado-placeholder');

    if(isDelivery) {
        sectionAgencia.style.display = 'none';
        sectionAgencia.toggleAttribute('disabled', true);

        for(const input of sectionAgencia.querySelectorAll('input')) {
            input.toggleAttribute('disabled', true);
        }
        
        sectionLocalizacao.style.display = null;
        sectionLocalizacao.toggleAttribute('disabled', false);

        for(const input of sectionLocalizacao.querySelectorAll('input')) {
            input.toggleAttribute('disabled', false);
        }
    } else {
        sectionAgencia.style.display = null;
        sectionAgencia.toggleAttribute('disabled', false);

        for(const input of sectionAgencia.querySelectorAll('input')) {
            input.toggleAttribute('disabled', false);
        }

        sectionLocalizacao.style.display = 'none';
        sectionLocalizacao.toggleAttribute('disabled', true);

        for(const input of sectionLocalizacao.querySelectorAll('input')) {
            input.toggleAttribute('disabled', true);
        }
    }

    inputAgendamentoId.value = null;
    agendamentoPlaceholder.innerText = '';
    validarCampos(true);
}

function initFuncionalidadeToggleCampos() {
    const selectCategoriaPedido = document.getElementById('select-categoria-pedido');

    selectCategoriaPedido.addEventListener('change', toggleVisibilidadeCamposDeliveryRetirada);

    toggleVisibilidadeCamposDeliveryRetirada.apply(selectCategoriaPedido);
}

export { initFuncionalidadeToggleCampos }