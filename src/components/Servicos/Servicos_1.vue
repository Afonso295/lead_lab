<template>
  <div id="servicos">
    <Home_1 :titulo="titulo" :subtitulo="subtitulo" :imagemSrc="imagemSrc" />
  </div>
</template>

<script>
import Home_1 from "../Home/Home_1.vue";

export default {
  name: "Servicos",
  components: {
    Home_1,
  },
  data() {
    return {
      titulo: "Cresça com quem sabe o caminho",
      subtitulo:
        "Crescer exige mais do que tentativa e erro. Conte com quem já fez este caminho na prática e sabe como levá-lo mais longe.",
      imagemSrc: "/img/Servicos/Lendo-jornal.png",
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
  object-fit: cover;
}
</style>
