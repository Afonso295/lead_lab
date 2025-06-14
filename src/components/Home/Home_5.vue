<template>
  <div class="home">
    <div class="txt1">
      <span>O nosso rating baseado em clientes e formandos verificados.</span>
    </div>
    <div class="txt2">
      <span>
        Mais de 90 clientes empresariais e 20.000 formandos confiaram em nós.
      </span>
    </div>
    <img class="img" src="/img/Home/carosel.png" alt="Avaliações de clientes" />
  </div>
</template>

<script>
export default {
  name: "Home_5",
};
</script>

<style scoped>
.home {
  color: aliceblue;
  text-align: center;
  padding: 0 20px;
}
.txt1 {
  margin-top: 130px;
  font-size: 59px;
  font-weight: bold;
  line-height: 1.2;
}
.txt2 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.img {
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin-top: 40px;
}

/* Media Queries */
@media (max-width: 768px) {
  .home {
    padding: 0 15px;
  }
  .txt1 {
    margin-top: 100px;
    font-size: 48px;
  }
  .txt2 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .txt1 {
    font-size: 36px;
  }
  .txt2 {
    font-size: 18px;
  }
}
</style>
