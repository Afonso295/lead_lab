<template>
  <div class="home">
    <div class="txt1">{{ titulo }}</div>
    <span class="txt2">{{ subtitulo }}</span>
    <ButaoQueroComecar />
  </div>
</template>

<script>
import ButaoQueroComecar from "../Butoes/ButaoQueroComecar.vue";

export default {
  name: "Home:6",
  components: {
    ButaoQueroComecar,
  },
  props: {
    titulo: {
      type: String,
      default: "Formação à medida",
    },
    subtitulo: {
      type: String,
      default:
        "Agende uma consulta sem compromisso com um dos nossos especialistas.",
    },
  },
};
</script>

<style scoped>
.home {
  color: aliceblue;
  text-align: center;
  margin-top: 130px;
  padding-bottom: 100px;
}
.txt1 {
  font-size: 59px;
  font-weight: bold;
}
.txt2 {
  font-size: 23px;
  max-width: 1100px;
  display: inline-block;
  margin: 0 auto;
}
</style>
