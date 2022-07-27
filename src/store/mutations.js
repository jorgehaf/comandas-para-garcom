const mutations = {
    manipularModalAdicionarValor(state, payload) {
        state.modalAdicionarValor.exibirModalAdicionarValor = payload.exibirModalAdicionarValor;
        state.modalAdicionarValor.tipoComanda = payload.tipoComanda;
        state.modalAdicionarValor.idMesaComandaModificada = payload.idMesaComandaModificada;
        state.modalAdicionarValor.idCadeiraComandaModificada = payload.idCadeiraComandaModificada;
    },
    adicionarMesaAoSaguao(state) {
        state.saguao.push({
            id: state.saguao.length + 1,
            comanda: 0,
            cadeiras: [{
                id: 1,
                idMesa: state.saguao.length + 1,
                comanda: 0,
            }],
        })
    },
    adicionarCadeira(state, payload) {
        state.saguao.forEach(mesa => {
            if (mesa.id === payload.idMesa) {
                mesa.cadeiras.push({
                    comanda: 0,
                    id: mesa.cadeiras.length + 1,
                    idMesa: mesa.id
                })
            }
        });
    },
    adicionarValorÀMesa(state, payload) {
        let indexMesa = payload.idMesaComandaModificada - 1
        state.saguao[indexMesa].comanda += payload.valor;
    },
    adicionarValorÀCadeira(state, payload) {
        let indexMesa = payload.idMesaComandaModificada - 1
        let indexCadeira = payload.idCadeiraComandaModificada - 1
        state.saguao[indexMesa].cadeiras[indexCadeira].comanda += payload.valor;
    }
}

export default mutations;