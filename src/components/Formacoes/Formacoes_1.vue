<template>
  <div id="servicos">
    <Home_1 :titulo="titulo" :subtitulo="subtitulo" :imagemSrc="imagemSrc" />
  </div>
</template>

<script>
import Home_1 from "../Home/Home_1.vue";

export default {
  name: "Worshops_1",
  components: {
    Home_1,
  },
  data() {
    return {
      titulo: "Curso em Gestão de Marketing",
      subtitulo:
        "Conheça as principais etapas da criação e gestão de um departamento de Marketing na nova era do Metamarketing.",
      imagemSrc: "/img/Gestao-Marketing.png",
    };
  },
};
</script>

<style scoped>
#servicos {
  color: aliceblue;
  position: relative;
  height: 690px;
  width: 100%;
  height: 520px;
  object-fit: cover;
}
</style>
