<template>
  <div id="saguao">
    <div id="botoes">
      <button class="button" @click="adicionarMesa()">Adicionar mesa</button>
    </div>
    <div id="mesas">
      <div v-for="mesa in saguao" :key="mesa.id" class="mesa">
        <Mesa :mesa="mesa" />
      </div>
    </div>
  </div>
</template>

<script>
import Mesa from "@/components/Mesa/Mesa";

export default {
  components: { Mesa },
  computed: {
    saguao() {
      return this.$store.getters.getSaguao;
    },
  },
  methods: {
    adicionarMesa() {
      this.$store.dispatch("adicionarMesaAoSaguao");
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1007px) {
  @import "SaguaoSmall.scss";
}
@media (min-width: 1008px) {
  @import "SaguaoLarge.scss";
}
</style>
