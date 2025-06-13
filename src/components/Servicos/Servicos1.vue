<template>
  <div id="servicos">
    <img class="servicos_1" src="/img/Servicos/Lendo-jornal.png" alt="" />
    <div class="dark-overlay"></div>
    <div class="overlay-text">
      <div class="txt1">Cresça com quem sabe o caminho</div>
      <div class="txt2">
        Crescer exige mais do que tentativa e erro. Conte com quem já fez este
        caminho na prática e sabe como levá-lo mais longe.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Servicos",
};
</script>

<style scoped>
#servicos {
  color: aliceblue;
  position: relative;
  height: 690px;
}
.servicos_1 {
  width: 100%;
  height: 690px;
  object-fit: cover;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 690px;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  z-index: 0; /* Camada */
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
  max-width: 1050px;
}

.txt1 {
  font-size: 70px;
}
.txt2 {
  font-size: 27px;
}
</style>
