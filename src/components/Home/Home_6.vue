<template>
  <div class="home">
    <span class="txt1">Formação à medida<br /></span>
    <span class="txt2">
      Agende uma consulta sem compromisso com um dos nossos especialistas.
    </span>
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
  font-weight: bold;
}
</style>
