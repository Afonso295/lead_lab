<template>
  <div class="home">
    <div class="txt">
      <span class="txt1">A nossa metodologia.</span>
      <span class="txt2">
        <br />Conheça a nossa abordagem estratégica para resultados de
        excelência.
      </span>
    </div>
    <div class="tabela">
      <div class="linha">
        <ul>
          <li><span class="txt_linha"> 1. DISCOVERY</span></li>
          <li>
            <span class="txt1_linha"
              >Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.</span
            >
          </li>
        </ul>
        <ul>
          <li><span class="txt_linha">2. BLUEPRINT</span></li>
          <li>
            <span class="txt1_linha"
              >Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.</span
            >
          </li>
        </ul>
      </div>
      <div class="linha">
        <ul>
          <li><span class="txt_linha">3. EXECUTION</span></li>
          <li>
            <span class="txt1_linha">
              Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.
            </span>
          </li>
        </ul>
        <ul>
          <li><span class="txt_linha">4. DELIGHT</span></li>
          <li>
            <span class="txt1_linha">
              Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.
            </span>
          </li>
        </ul>
      </div>
      <div class="linha">
        <ul>
          <li><span class="txt_linha">5. ANALYTICS</span></li>
          <li>
            <span class="txt1_linha"
              >Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.</span
            >
          </li>
        </ul>
        <ul>
          <li><span class="txt_linha">6. OPTIMIZATION</span></li>
          <li>
            <span class="txt1_linha"
              >Primeira reunião com um levantamento de necessidades do cliente,
              identificando objetivos.</span
            >
          </li>
        </ul>
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
  color: aliceblue;
  padding: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.txt1 {
  margin-top: 100px;
  font-size: 59px;
  font-weight: bold;
  text-align: center;
  max-width: 1000px;
}

.txt2 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  max-width: 1050px;
}
.txt {
  max-width: 500px;
  margin-left: 10px;
}
.txt_linha {
  font-size: 20px;
}
.txt1_linha {
  font-size: 14px;
}

.tabela {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: 10px;
}

.linha {
  display: flex;
  gap: 20px;
  justify-content: center;
  max-width: 900px;
  margin-bottom: -35px;
}

.tabela ul {
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgb(47, 47, 47);
  list-style: none;
  font-size: 20px;
}
</style>
