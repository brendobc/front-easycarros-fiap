import { Pedido } from "../../model/Pedido.js";

const sectionAgencia = document.getElementById('section-agencia'),
      sectionLocalizacao = document.getElementById('section-localizacao');

/**
 * @this {HTMLSelectElement}
 */
function toggleVisibilidadeCamposDeliveryRetirada() {
    const isDelivery = this.value === Pedido.Categoria.DELIVERY;

    if(isDelivery) {
        sectionAgencia.style.display = 'none';
        sectionAgencia.toggleAttribute('disabled', true);
        
        sectionLocalizacao.style.display = null;
        sectionLocalizacao.toggleAttribute('disabled', false);
    } else {
        sectionAgencia.style.display = null;
        sectionAgencia.toggleAttribute('disabled', false);

        sectionLocalizacao.style.display = 'none';
        sectionLocalizacao.toggleAttribute('disabled', true);
    }
}

function initFuncionalidadeToggleCampos() {
    const selectCategoriaPedido = document.getElementById('select-categoria-pedido');

    selectCategoriaPedido.addEventListener('change', toggleVisibilidadeCamposDeliveryRetirada);

    toggleVisibilidadeCamposDeliveryRetirada.apply(selectCategoriaPedido);
}

export { initFuncionalidadeToggleCampos }