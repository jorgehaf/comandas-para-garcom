const actions = {
    manipularModalAdicionarValor({
        commit
    }, payload) {
        commit("manipularModalAdicionarValor", payload)
    },
    adicionarMesaAoSaguao({
        commit
    }) {
        commit("adicionarMesaAoSaguao")
    },
    adicionarCadeira({
        commit
    }, payload) {
        commit("adicionarCadeira", payload)
    },
    adicionarValorÀMesa({
        commit
    }, payload) {
        commit("adicionarValorÀMesa", payload)
    },
    adicionarValorÀCadeira({
        commit
    }, payload) {
        commit("adicionarValorÀCadeira", payload)
    }
}

export default actions;