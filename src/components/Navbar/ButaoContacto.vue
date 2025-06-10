<template>
  <div>
    <button class="botaocontacto">Contacte-nos</button>
  </div>
</template>

<script>
export default {
  name: "ButaoContacto",
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.botaocontacto {
  background-color: black;
  color: aliceblue;
  border: 1px solid aliceblue;
  border-radius: 999px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
}

.botaocontacto:hover {
  color: rgb(0, 255, 136);
}
</style>
