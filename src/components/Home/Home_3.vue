<template>
  <div class="home">
    <div class="col-esquerda">
      <div class="txt">
        <span class="txt1">A nossa metodologia.</span>
        <span class="txt2">
          <br />Conheça a nossa abordagem estratégica para resultados de
          excelência.
        </span>
      </div>
    </div>

    <div class="col-direita">
      <div class="tabela">
        <div class="linha">
          <ul>
            <li><span class="txt_linha">1. DISCOVERY</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
          <ul>
            <li><span class="txt_linha">2. BLUEPRINT</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
        </div>
        <div class="linha">
          <ul>
            <li><span class="txt_linha">3. EXECUTION</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
          <ul>
            <li><span class="txt_linha">4. DELIGHT</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
        </div>
        <div class="linha">
          <ul>
            <li><span class="txt_linha">5. ANALYTICS</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
          <ul>
            <li><span class="txt_linha">6. OPTIMIZATION</span></li>
            <li>
              <span class="txt1_linha"
                >Primeira reunião com um levantamento de necessidades do
                cliente, identificando objetivos.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_3",
};
</script>

<style scoped>
.home {
  display: flex;
  gap: 40px;
  color: aliceblue;
  padding: 10px;
  align-items: center;
  flex-wrap: wrap; /* Para ficar responsivo em ecrãs pequenos */
  min-height: 100vh; /* ocupar a altura toda da viewport */
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

.txt1_linha {
  font-size: 14px;
}
</style>
