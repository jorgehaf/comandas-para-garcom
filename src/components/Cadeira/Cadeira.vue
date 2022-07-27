<template>
  <div id="cadeira">
    <h4>Comanda {{ cadeira.id }}</h4>
    <div class="cadeira-row">
      <p>Fatia da comanda da mesa:</p>
      <p>
        <strong>R${{ parteComandaMesa.toFixed(2) }}</strong>
      </p>
    </div>
    <div class="cadeira-row">
      <p>Comanda individual:</p>
      <p>
        <strong>R${{ cadeira.comanda.toFixed(2) }}</strong>
      </p>
    </div>
    <div class="cadeira-row">
      <p>Total a pagar:</p>
      <p>
        R$<strong>{{ totalAPagar }}</strong>
      </p>
    </div>
    <button class="button" @click="adicionarValorCadeira($enums.tipoComanda.cadeira, cadeira.idMesa, cadeira.id)">Adicionar valor à comanda {{ cadeira.id }}</button>
  </div>
</template>

<script>
import Cadeira from "../Cadeira/Cadeira.vue";

export default {
  components: { Cadeira },
  props: ["cadeira", "parteComandaMesa"],
  computed: {
    totalAPagar() {
      return (this.parteComandaMesa + this.cadeira.comanda).toFixed(2);
    },
  },
  methods: {
    adicionarValorCadeira(tipoComanda, idMesa, idCadeira) {
      this.$store.dispatch("manipularModalAdicionarValor", {
        exibirModalAdicionarValor: true,
        tipoComanda: tipoComanda,
        idMesaComandaModificada: idMesa,
        idCadeiraComandaModificada: idCadeira,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "CadeiraSmall.scss";
}
@media (min-width: 1008px) {
  @import "CadeiraLarge.scss";
}
</style>
