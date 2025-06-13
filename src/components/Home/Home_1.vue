<template>
  <div id="home">
    <img id="home_1" :src="imagemSrc" alt="" />
    <div class="dark-overlay"></div>
    <div class="overlay-text">
      <div class="txt1">{{ titulo }}</div>
      <span class="txt2">{{ subtitulo }}<ButaoQueroComecar /></span>
    </div>
  </div>
</template>
<script>
import ButaoQueroComecar from "../Butoes/ButaoQueroComecar.vue";

export default {
  name: "Home_1",
  components: {
    ButaoQueroComecar,
  },
  props: {
    titulo: {
      type: String,
      default: "Aceleramos o Crescimento com Marketing Digital",
    },
    subtitulo: {
      type: String,
      default:
        "Descubra os nossos serviços de marketing digital, mentoria e formação à medida que transformaram a vida de mais de 20.000 profissionais de Portugal e Angola.",
    },
    imagemSrc: {
      type: String,
      default: "/img/Home/home-1.png",
    },
  },
};
</script>

<style scoped>
#home {
  color: aliceblue;
  position: relative;
}
#home_1 {
  width: 100%;
  height: 520px;
  object-fit: cover;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  z-index: 0;
}

.overlay-text {
  position: absolute;
  line-height: 1.3;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  width: 100%;
  z-index: 2;
  overflow-wrap: break-word;
  max-width: 1200px;
}

.txt1 {
  font-size: 70px;
  margin-top: 90px;
}
.txt2 {
  font-size: 27px;
}
</style>
