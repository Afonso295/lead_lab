<template>
  <div class="home">
    <div class="col-esquerda">
      <div class="txt">
        <span class="txt1">A nossa metodologia.</span>
        <span class="txt2">
          <br />Conheça a nossa abordagem estratégica para resultados de
          excelência.
        </span>
        <span><ButaoQueroComecar class="butao" /></span>
      </div>
    </div>

    <div class="col-direita">
      <div class="tabela">
        <div class="linha">
          <ul>
            <li>
              <div class="img"><img src="/img/11.png" /></div>
              <span class="txt_linha">1. DISCOVERY</span>
            </li>
            <li>
              <span class="txt1_linha">
                Primeira reunião com um levantamento de necessidades do cliente,
                identificando objetivos.</span
              >
            </li>
          </ul>
          <ul>
            <li>
              <div class="img"><img src="/img/12.png" /></div>
              <span class="txt_linha">2. BLUEPRINT</span>
            </li>
            <li>
              <span class="txt1_linha">
                Desenvolvimento de uma estratégia de Marketing 360º desenhada à
                medida.</span
              >
            </li>
          </ul>
        </div>
        <div class="linha">
          <ul>
            <li>
              <div class="img"><img src="/img/21.png" /></div>
              <span class="txt_linha">3. EXECUTION</span>
            </li>
            <li>
              <span class="txt1_linha"
                >Operacionalização de uma solução “Chave na mão”, que abrange a
                execução dos serviços.</span
              >
            </li>
          </ul>
          <ul>
            <li>
              <div class="img"><img src="/img/22.png" /></div>
              <span class="txt_linha">4. DELIGHT</span>
            </li>
            <li>
              <span class="txt1_linha"
                >Ajudamos os nossos clientes a implementar estratégias de
                retenção de clientes.</span
              >
            </li>
          </ul>
        </div>
        <div class="linha">
          <ul>
            <li>
              <div class="img"><img src="/img/31.png" /></div>
              <span class="txt_linha">5. ANALYTICS</span>
            </li>
            <li>
              <span class="txt1_linha"
                >Acompanhamento dos resultados através da análise de métricas
                chave dos vários canais.</span
              >
            </li>
          </ul>
          <ul>
            <li>
              <div class="img"><img src="/img/32.png" /></div>
              <span class="txt_linha">6. OPTIMIZATION</span>
            </li>
            <li>
              <span class="txt1_linha"
                >Implementação de melhorias com base nos dados que vão sendo
                recolhidos ao longo da jornada.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButaoQueroComecar from "../Butoes/ButaoQueroComecar.vue";

export default {
  name: "Home_3",
  components: {
    ButaoQueroComecar,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  gap: 40px;
  color: aliceblue;
  padding: 10px;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  padding-top: 100px;
}

/* Coluna da esquerda - texto principal */
.col-esquerda {
  flex: 1 1 400px;
  max-width: 500px;
  justify-content: center;
}

/* Coluna da direita - tabela */
.col-direita {
  flex: 2 1 600px; /* ocupa mais espaço */
  max-width: 900px;
}

.txt1 {
  font-size: 59px;
  font-weight: bold;
  text-align: left;
  max-width: 100%;
  line-height: 70px;
}

.txt2 {
  font-size: 23px;
  font-weight: bold;
  text-align: left;
  max-width: 100%;
}

.txt {
  margin-left: 60px;
  max-width: 400px;
  color: aliceblue;
  margin-top: 10px;
}

.tabela {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  margin-left: 0;
  margin-right: 0;
}

.linha {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  max-width: 900px;
  margin-bottom: -30px;
}

.tabela ul {
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgb(47, 47, 47);
  list-style: none;
  font-size: 20px;
  flex: 1;
  margin-right: 30px;
}

.txt_linha {
  font-size: 20px;
  color: rgb(0, 255, 136);
  font-weight: bold;
}
.img {
  display: flex;
  align-items: flex-start;
  margin-top: -10px;
  margin-bottom: 20px;
}
.img img {
  width: 55px;
  height: 50px;
  margin-left: 250px;
  display: flex;
}

.txt1_linha {
  font-size: 16.7px;
}
.butao {
  margin-left: -180px;
}
</style>
