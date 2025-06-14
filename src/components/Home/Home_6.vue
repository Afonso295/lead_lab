<template>
  <div class="home">
    <div class="txt1">{{ titulo }}</div>
    <span class="txt2">{{ subtitulo }}</span>
    <div class="button-container">
      <ButaoQueroComecar />
    </div>
  </div>
</template>

<script>
import ButaoQueroComecar from "../Butoes/ButaoQueroComecar.vue";

export default {
  name: "Home_6",
  components: {
    ButaoQueroComecar,
  },
  props: {
    titulo: {
      type: String,
      default: "Vamos Falar?",
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
  padding: 0 20px 100px 20px;
}
.txt1 {
  font-size: 59px;
  font-weight: bold;
  line-height: 1.2;
}
.txt2 {
  font-size: 23px;
  max-width: 700px;
  display: inline-block;
  margin: 20px auto 0 auto;
}
.button-container {
  margin-top: 40px;
}

@media (max-width: 768px) {
  .home {
    margin-top: 100px;
    padding-bottom: 80px;
  }
  .txt1 {
    font-size: 48px;
  }
  .txt2 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .home {
    margin-top: 80px;
  }
  .txt1 {
    font-size: 36px;
  }
  .txt2 {
    font-size: 18px;
  }
}
</style>
