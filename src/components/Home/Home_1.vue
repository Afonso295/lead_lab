<template>
  <div id="home">
    <img id="home_1" src="/img/home-1.png" alt="" />
    <div class="dark-overlay"></div>
    <div class="overlay-text">
      <div class="txt1">
        Aceleramos o Crescimento <br />
        com Marketing Digital
      </div>
      <div class="txt2">
        Descubra os nossos serviços de marketing digital, mentoria e formação à
        medida que <br />
        transformaram a vida de mais de 20.000 profissionais de Portugal e
        Angola.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home_1",
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
}

.txt1 {
  font-size: 70px;
}
.txt2 {
  font-size: 27px;
}
</style>
