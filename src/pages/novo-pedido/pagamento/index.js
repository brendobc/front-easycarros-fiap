function initFuncionalidadesPagamento() {
    const formaPagamento = document.getElementById("formaPagamento"),
          labelParcelas = document.getElementById("labelParcelas"),
          numeroParcelas = document.getElementById("numeroParcelas"),
          formaPagamentoCartao = document.getElementById('formaPagamentoCartao');

    // Adicione um evento de mudança à forma de pagamento
    formaPagamento.addEventListener("change", function () {
        // Verifique se a forma de pagamento é "parcelado" e exiba o select de parcelas
        if (formaPagamento.value === "parcelado") {
            labelParcelas.style.display = "inline";
            numeroParcelas.style.display = "inline";
            formaPagamentoCartao.style.display = "none";
            formaPagamentoCartao.labels[0].style.display = "none";
            
            Array.prototype.forEach.call(formaPagamentoCartao.options, (option) => {
                option.selected = option.value === 'CARTAO_CREDITO';
            });
        } else {
            labelParcelas.style.display = "none";
            numeroParcelas.style.display = "none";
            formaPagamentoCartao.style.display = "inline";
            formaPagamentoCartao.labels[0].style.display = "inline";
        }
    });

    $("#numeroCartao").mask("9999 9999 9999 9999");
    $("#cvvCartao").mask("9999");
}

export { initFuncionalidadesPagamento }