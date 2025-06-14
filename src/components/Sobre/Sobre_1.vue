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
      titulo: "O parceiro certo para o seu crescimento online",
      subtitulo:
        "Ajudamos marcas a relacionarem-se com os seus potenciais clientes através dos meios digitais. A chave para o nosso sucesso? Nós trazemos o pessoal para o digital.",
      imagemSrc: "/img/Sobre/Filipe-Margarida.png",
    };
  },
};
</script>

<style scoped>
#servicos {
  color: aliceblue;
  background-color: black;
  position: relative;
  width: 100%;
  height: 510px;
  object-fit: cover;
}

@media (max-width: 768px) {
  #servicos {
    height: auto;
    min-height: 400px;
    padding: 20px 10px;
  }
}

@media (max-width: 480px) {
  #servicos {
    min-height: 350px;
  }
}
</style>
