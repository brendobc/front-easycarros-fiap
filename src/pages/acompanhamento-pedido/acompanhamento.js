import { getPedidoSalvo } from "../../service/storage.js";

console.log('Teste tela acompanhar pedido');

function initConsultaAcompanhamento() {
    const acompanhamentoPlaceholder = document.getElementById('acompanhamento');
    
    var consultaPedido = getPedidoSalvo();
    if (!consultaPedido) {
        
        consultaPedido.innerText = "empty space" 
    }   
}

export {  initConsultaAcompanhamento  }