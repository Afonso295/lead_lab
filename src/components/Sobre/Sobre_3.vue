<template>
  <div class="sobre">
    <div class="texto-container">
      <h2 class="titulo">Sobre a Lead Lab</h2>
      <p class="texto">
        Acreditamos que o digital tem o poder de transformar organizações,
        capacitar pessoas e impulsionar marcas para novos patamares. O nosso
        propósito é fortalecer a ligação entre empresas, profissionais e as suas
        audiências, ajudando-as a crescer de forma sustentável e a enfrentar os
        desafios de um mundo cada vez mais digitalizado e imersivo. <br /><br />
        Combinamos a experiência de uma equipa de gestão com mais de 13 anos nas
        áreas de marketing digital e UX/UI que colaborou diretamente com algumas
        das maiores marcas a nível mundial, com o investimento contínuo em
        formação e mentoria, capacitando profissionais e empresas com as
        competências necessárias para se destacarem no ambiente digital.
        <br /><br />
        Somos uma agência de Marketing Digital e Gestão de Redes Sociais
        especializada no apoio a organizações dos setores Público
        Administrativo, Financeiro, Consultoria em IT, Eventos e Saúde.
        Oferecemos serviços que incluem estratégia digital, gestão de redes
        sociais, formação e mentoria, com uma abordagem prática, humana e
        orientada para resultados. <br /><br />Com mais de 13 anos de
        experiência, já colaborámos com algumas das maiores marcas globais e
        ajudámos a formar mais de 200.000 profissionais em Portugal e Angola. Na
        Lead Lab, entregamos "Skills to Grow".
      </p>
    </div>
    <div class="imagem-container">
      <img
        class="img"
        src="/img/Sobre/Filipe_Margarida2.png"
        alt="Filipe e Margarida"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre_3",
};
</script>

<style scoped>
.sobre {
  background-color: black;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 100px 20px;
  gap: 50px;
}
.texto-container {
  max-width: 550px;
}
.img {
  height: auto;
  width: 100%;
  max-width: 450px;
  border-radius: 30px;
}
.titulo {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
}
.texto {
  font-size: 18px;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .sobre {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px 60px 30px;
  }
  .img {
    margin-top: 40px;
  }
  .titulo {
    font-size: 40px;
  }
  .texto {
    font-size: 17px;
  }
}

@media (max-width: 600px) {
  .sobre {
    padding: 30px 15px 50px 15px;
  }
  .titulo {
    font-size: 32px;
  }
  .texto {
    font-size: 16px;
  }
}
</style>
