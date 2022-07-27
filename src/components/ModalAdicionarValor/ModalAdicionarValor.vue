<template>
  <div id="modal-adicionar-valor" v-if="objetoModalAdicionarValor.exibirModalAdicionarValor">
    <div id="modal-container" class="animate__animated animate__fadeIn">
      <div id="container-adicionar-valor-mesa" v-if="ehComandaMesa">
        <h3>Adicionar valor à mesa {{ objetoModalAdicionarValor.idMesaComandaModificada }}.</h3>
      </div>

      <div id="container-adicionar-valor-cadeira" v-if="ehComandaCadeira">
        <h3>Adicionar valor à comanda {{ objetoModalAdicionarValor.idCadeiraComandaModificada }} da mesa {{ objetoModalAdicionarValor.idMesaComandaModificada }}.</h3>
      </div>

      <div id="input-valor">
        R$
        <input class="input" type="number" placeholder="0" v-model="valor" />
      </div>
      <button class="button" @click="adicionarValor()">Adicionar valor</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valor: null,
    };
  },
  computed: {
    objetoModalAdicionarValor() {
      return this.$store.getters.getExibirModalAdicionarValor;
    },
    ehComandaMesa() {
      return this.objetoModalAdicionarValor.tipoComanda === this.$enums.tipoComanda.mesa;
    },
    ehComandaCadeira() {
      return this.objetoModalAdicionarValor.tipoComanda === this.$enums.tipoComanda.cadeira;
    },
  },
  methods: {
    async adicionarValor() {
      if (this.ehComandaMesa) {
        await this.$store.dispatch("adicionarValorÀMesa", {
          idMesaComandaModificada: this.objetoModalAdicionarValor.idMesaComandaModificada,
          valor: parseFloat(this.valor || 0),
        });
      }
      if (this.ehComandaCadeira) {
        await this.$store.dispatch("adicionarValorÀCadeira", {
          idMesaComandaModificada: this.objetoModalAdicionarValor.idMesaComandaModificada,
          idCadeiraComandaModificada: this.objetoModalAdicionarValor.idCadeiraComandaModificada,
          valor: parseFloat(this.valor || 0),
        });
      }
      this.limparInputs();
      this.fecharModalAdicionarValor();
    },
    limparInputs() {
      this.valor = null;
    },
    fecharModalAdicionarValor() {
      this.$store.dispatch("manipularModalAdicionarValor", {
        exibirModalAdicionarValor: false,
        tipoComanda: 0,
        idMesaComandaModificada: 0,
        idCadeiraComandaModificada: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "ModalAdicionarValorSmall.scss";
}
@media (min-width: 1008px) {
  @import "ModalAdicionarValorLarge.scss";
}
</style>
