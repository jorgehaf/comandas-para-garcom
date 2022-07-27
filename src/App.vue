<template>
  <div id="app">
    <ModalAdicionarValor />
    <router-view />
  </div>
</template>

<script>
import ModalAdicionarValor from "@/components/ModalAdicionarValor/ModalAdicionarValor";
import "animate.css";

export default {
  components: { ModalAdicionarValor },
};
</script>

<style lang="scss">
html,
body {
  font-family: "Roboto", "sans-serif";
  margin: 0;
}
</style>
