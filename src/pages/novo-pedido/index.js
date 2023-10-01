import './localizacao.js';

import { initValidacaoNovoPedido } from "./validar-form-novo-pedido.js";
import { initFuncionalidadesModalAgendamento } from "./agendamento.js";
import { initSelecaoPeriodoLocacao } from "./periodo-locacao.js";
import { initFuncionalidadesPagamento } from "./pagamento/index.js";
import { initFuncionalidadesModalEscolhaAgencia } from "./escolha-de-agencia.js";

// TODO inicializar validações
console.log('Tela de pedido');

initValidacaoNovoPedido();
initFuncionalidadesModalAgendamento();
initSelecaoPeriodoLocacao();
initFuncionalidadesPagamento();
initFuncionalidadesModalEscolhaAgencia();