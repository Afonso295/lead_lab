<template>
  <div class="sobre">
    <ul>
      <img class="img1" src="/img/Sobre/LisboaE-nova.png" alt="Lisboa E-nova" />
    </ul>
    <ul>
      <img class="img2" src="/img/Sobre/logo-solis-white.png" alt="Solis" />
    </ul>
    <ul>
      <img class="img3" src="/img/Sobre/bela-seguros.png" alt="Bela Seguros" />
    </ul>
    <ul>
      <img class="img4" src="/img/Sobre/f5it-logo.png" alt="F5IT" />
    </ul>
    <ul>
      <img class="img5" src="/img/Sobre/raiyaviva-logo.png" alt="Raiyaviva" />
    </ul>
    <ul>
      <img
        class="img6"
        src="/img/Sobre/DOMAPortugalWeddings.png"
        alt="Doma Weddings"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sobre_2",
};
</script>

<style scoped>
.sobre {
  background-color: black;
  margin-top: 10px;
  padding: 40px 20px 100px 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.sobre ul {
  padding: 0;
  margin: 10px;
}
.sobre img {
  height: 45px;
  width: auto;
}

@media (max-width: 768px) {
  .sobre {
    gap: 20px;
    padding-bottom: 60px;
  }
  .sobre img {
    height: 40px;
  }
}

@media (max-width: 480px) {
  .sobre img {
    height: 35px;
  }
}
</style>
