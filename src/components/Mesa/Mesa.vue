<template>
  <div id="mesa">
    <div id="mesa-container">
      <h1>Mesa {{ mesa.id }}</h1>
      <p>
        Comanda da mesa: <strong>R${{ mesa.comanda.toFixed(2) }}</strong>
      </p>
      <button class="button" @click="adicionarValor($enums.tipoComanda.mesa, mesa.id)">Adicionar valor à mesa {{ mesa.id }}</button>
      <button class="button" @click="adicionarCadeira(mesa.id)">Adicionar comanda individual</button>

      <div id="cadeiras">
        <div v-for="cadeira in mesa.cadeiras" :key="cadeira.id" class="cadeira">
          <Cadeira :cadeira="cadeira" :parteComandaMesa="contaDividida" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cadeira from "../Cadeira/Cadeira.vue";

export default {
  components: { Cadeira },
  props: ["mesa"],
  computed: {
    numeroCadeiras() {
      return this.mesa.cadeiras.length;
    },
    contaDividida() {
      return this.mesa.comanda / this.numeroCadeiras;
    },
  },
  methods: {
    adicionarValor(tipoComanda, idMesa) {
      this.$store.dispatch("manipularModalAdicionarValor", {
        exibirModalAdicionarValor: true,
        tipoComanda: tipoComanda,
        idMesaComandaModificada: idMesa,
        idCadeiraComandaModificada: 0,
      });
    },
    adicionarCadeira(idMesa) {
      this.$store.dispatch("adicionarCadeira", { idMesa: idMesa });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "MesaSmall.scss";
}
@media (min-width: 1008px) {
  @import "MesaLarge.scss";
}
</style>
