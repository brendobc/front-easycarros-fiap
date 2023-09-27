/**
 * @file lida com o salvamento de pedidos
 * Por agora, só será possível salvar um pedido por vez para facilitar a nossa vida :p
 */

import { Pedido } from "../model/Pedido.js";

const PEDIDO_KEY = 'pedido';

/**
 * Salva o pedido no localStorage
 * @param {Pedido} pedido 
 */
function salvarPedido(pedido) {
    localStorage.setItem(PEDIDO_KEY, JSON.stringify(pedido));
}

/**
 * Resgata o pedido salvo no localStorage
 * @returns {Pedido | null}
 */
function getPedidoSalvo() {
    return JSON.parse(localStorage.getItem(PEDIDO_KEY));
}

export { salvarPedido, getPedidoSalvo }