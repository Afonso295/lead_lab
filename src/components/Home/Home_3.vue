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
              <div class="img">
                <img src="/img/Icons/11.png" alt="DISCOVERY" />
              </div>
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
              <div class="img">
                <img src="/img/Icons/12.png" alt="BLUEPRINT" />
              </div>
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
              <div class="img">
                <img src="/img/Icons/21.png" alt="EXECUTION" />
              </div>
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
              <div class="img">
                <img src="/img/Icons/22.png" alt="DELIGHT" />
              </div>
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
              <div class="img">
                <img src="/img/Icons/31.png" alt="ANALYTICS" />
              </div>
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
              <div class="img">
                <img src="/img/Icons/32.png" alt="OPTIMIZATION" />
              </div>
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
  padding: 100px 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.col-esquerda {
  flex: 1 1 400px;
  max-width: 450px;
}

.txt {
  max-width: 400px;
  margin: 0 auto;
}

.txt1 {
  font-size: 59px;
  font-weight: bold;
  line-height: 1.2;
}

.txt2 {
  font-size: 23px;
  font-weight: bold;
}

.col-direita {
  flex: 2 1 600px;
  max-width: 900px;
}

.tabela {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.linha {
  display: flex;
  gap: 20px;
}

.tabela ul {
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgb(47, 47, 47);
  list-style: none;
  flex: 1;
}

.tabela ul li {
  list-style: none;
}

.txt_linha {
  font-size: 20px;
  color: rgb(0, 255, 136);
  font-weight: bold;
}

.img {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.img img {
  width: 55px;
  height: 50px;
}

.txt1_linha {
  font-size: 16px;
  line-height: 1.5;
}

.butao {
  display: block;
  margin-top: 30px;
}

@media (max-width: 1024px) {
  .home {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
  .col-esquerda {
    margin-bottom: 40px;
  }
  .linha {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .txt1 {
    font-size: 48px;
  }
  .txt2 {
    font-size: 20px;
  }
  .butao {
    margin-left: auto;
    margin-right: auto;
  }
  .img {
    justify-content: center;
  }
  .txt_linha,
  .txt1_linha {
    text-align: center;
  }
}
</style>
