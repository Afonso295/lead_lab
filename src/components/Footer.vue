<template>
  <div id="footer">
    <ul>
      <li class="traco"><img src="/img/logo.png" alt="" /></li>
      <li>hello@leadlab-digital.com<br />(+351) 928 161 579</li>
      <li class="termos">Termos e Condições<br />Política de Privacidade</li>
    </ul>
    <ul>
      <li class="traco"><samp class="tracob"></samp></li>
      <li class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/servicos">Serviços</router-link>
        <router-link to="/formacao">Formação</router-link>
        <router-link to="/workshops">Workshops</router-link>
        <router-link to="/sobre">Sobre</router-link>
      </li>
      <li></li>
    </ul>
    <ul>
      <li class="traco"><button class="tracob">insta</button></li>
      <li><ButaoContacto /></li>
      <li>
        Autorizado pela Lead Lab. Desenvolvido por Afonso Carrasquinho (estágio,
        Vue.js). © 2025
      </li>
    </ul>
  </div>
</template>

<script>
import ButaoContacto from "./Navbar/ButaoContacto.vue";
export default {
  name: "Footer",
  components: {
    ButaoContacto,
  },
};
</script>

<style scoped>
#footer {
  background-color: black;
  color: aliceblue;
  padding: 40px 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
  align-items: flex-start;
}
#footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
#footer li {
  font-size: 14px;
}
#footer img {
  height: 30px;
  width: auto;
}
.traco {
  border-bottom: 2px solid aliceblue;
  padding-bottom: 5px;
  height: 40px;
  width: 100%;
}
.tracob {
  margin-top: 10px;
}
.termos {
  margin-top: 30px;
}
.router {
  display: flex;
  gap: 8px;
  margin-left: -200px;
}
.router a {
  color: aliceblue;
}
</style>
