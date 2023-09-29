/**
 * @file lida com o salvamento de pedidos
 * Por agora, só será possível salvar um pedido por vez para facilitar a nossa vida :p
 */

import { Pedido } from "../model/Pedido.js";
import { Usuario } from "../model/Usuario.js";

const PEDIDO_KEY = 'pedido';

/**
 * Salva o pedido no localStorage
 * @param {Pedido} pedido 
 */
function salvarPedido(pedido) {
    // Na POC, haverá apenas um pedido por vez.
    // Não há necessidade de gerenciar ids de entidades
    pedido.id = 1;
    pedido.usuario = Usuario.getUsuarioMock();
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