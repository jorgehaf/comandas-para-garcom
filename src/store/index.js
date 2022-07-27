import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalAdicionarValor: {
      exibirModalAdicionarValor: false,
      tipoComanda: 0,
      idMesaComandaModificada: 0,
      idCadeiraComandaModificada: 0
    },
    saguao: []
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
})