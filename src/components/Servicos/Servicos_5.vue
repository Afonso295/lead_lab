<template>
  <div class="servicos">
    <Home_6 :titulo="titulo" :subtitulo="subtitulo" />
  </div>
</template>

<script>
import Home_6 from "../Home/Home_6.vue";

export default {
  name: "Servicos_5",
  components: {
    Home_6,
  },
  props: {
    titulo: {
      type: String,
      default: "Consultoria Gratuita",
    },
    subtitulo: {
      type: String,
      default:
        "Agende uma consulta sem compromisso com um dos nossos especialistas e receba uma análise com proposta de melhoria nas redes sociais.",
    },
  },
};
</script>

<style scoped>
.servicos {
  color: aliceblue;
  background-color: black;
  padding: 1px;
}
</style>
