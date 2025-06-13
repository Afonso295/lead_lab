<template>
  <div class="servicos">
    <div class="txt1">
      Inspiramos profissionais e empresas a crescer no digital
    </div>
    <div class="txt2">
      Enfrenta algum destes desafios no digital ou sente que não tem os
      resultados esperados nos seus projetos por alguma das seguintes situações?
    </div>
    <div class="tabela">
      <ul>
        Está a elaborar um plano de negócios e gostava de obter acompanhamento
        <br />na área de marketing
        <div class="txt4">
          Nós ajudamos
          <img
            class="check_circle"
            src="/img/Servicos/check_circle.png"
            alt=""
          />
        </div>
      </ul>
      <ul>
        Quer construir um plano de marketing anual para a sua empresa e gostava
        de
        <br />ser acompanhado por profissionais
        <div class="txt4">
          Nós ajudamos
          <img
            class="check_circle"
            src="/img/Servicos/check_circle.png"
            alt=""
          />
        </div>
      </ul>
      <ul>
        Deseja criar um departamento de marketing internamente, mas com
        <br />acompanhamento de uma equipa externa com experiência
        <div class="txt4">
          Nós ajudamos
          <img
            class="check_circle"
            src="/img/Servicos/check_circle.png"
            alt=""
          />
        </div>
      </ul>
      <ul>
        Tem um novo projeto ou um evento específico e necessita de alguém que o
        <br />ajude a delinear a estratégia de marketing digital
        <div class="txt4">
          Nós ajudamos
          <img
            class="check_circle"
            src="/img/Servicos/check_circle.png"
            alt=""
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Servicos2",
};
</script>

<style scoped>
.servicos {
  background-color: black;
  color: aliceblue;
  padding: 1px;
}
.txt1 {
  margin-top: 100px;
  font-size: 59px;
  font-weight: bold;
  text-align: center;
  max-width: 1000px;
  margin-left: 150px;
}
.txt2 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  max-width: 1050px;
  margin-left: 150px;
}
.txt4 {
  justify-content: end;
  margin-top: -60px;
  color: #00ff88;
  display: flex;
  font-size: 23px;
  font-weight: lighter;
}
.check_circle {
  margin-left: 10px;
  width: auto;
  height: 30px;
  margin-top: 3px;
}

.tabela {
  font-size: 23px;
  font-weight: bold;
  max-width: 1250px;
  margin: 70px auto 0 auto;
}
.tabela ul {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid rgb(47, 47, 47);
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
  height: 80px;
  width: auto;
  justify-content: center;
}
</style>
