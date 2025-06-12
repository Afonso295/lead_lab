<template>
  <div>
    <button class="botao">Quero começar agora</button>
  </div>
</template>

<script>
export default {
  name: "ButaoQueroComecar",
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.botao {
  background-color: rgb(0, 255, 136);
  color: rgb(0, 0, 0);
  border: 1px solid rgb(0, 255, 136);
  border-radius: 999px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  font-weight: bold;
  margin-top: 50px;
}

.botao:hover {
  background-color: rgb(0, 229, 122);
  border: 1px solid rgb(0, 229, 122);
}
</style>
