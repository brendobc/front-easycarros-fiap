function initFuncionalidadesModalAgendamento() {
    const btnAgendamento = document.getElementById('btn-agendamento');
    btnAgendamento.addEventListener('click', function() {
        const inputAgendamento = document.querySelector('#lista-agendamento input:checked');
        if(!inputAgendamento) {
            return ;
        }
        
        const inputAgendamentoId = document.getElementById('agendamento');
        const agendamentoPlaceholder = document.getElementById('agendamento-selecionado-placeholder')
        inputAgendamentoId.value = inputAgendamento.value;

        agendamentoPlaceholder.innerText = inputAgendamento.labels[0].innerText
    })
}

export { initFuncionalidadesModalAgendamento }