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
      <li class="traco">
        <a href="https://www.youtube.com/@leadlabdigitalmkt" target="_blank">
          <img src="/img/Footer/yt.png" alt="Youtube" width="300" />
        </a>
        <a
          href="https://pt.linkedin.com/company/leadlabdigital"
          target="_blank"
        >
          <img src="/img/Footer/in.png" alt="Linkedin" width="300" />
        </a>
        <a href="https://www.instagram.com/leadlabdigitalmkt/" target="_blank">
          <img src="/img/Footer/insta.png" alt="Instagram" width="300" />
        </a>
        <a
          href="https://www.facebook.com/filipemonteiromarketing"
          target="_blank"
        >
          <img src="/img/Footer/face.png" alt="Facebook" width="300" />
        </a>
        <a
          href="https://www.tiktok.com/@leadlabdigitalmkt?_t=8siHufuFb0Q&_r=1"
          target="_blank"
        >
          <img src="/img/Footer/tiktok.png" alt="Tiktok" width="300" />
        </a>
      </li>
      <li class="butao"><ButaoContacto /></li>
      <li class="autorizacao">
        Autorizado pela Lead Lab. Desenvolvido por Afonso Carrasquinho (estágio,
        Vue.js). © 2025
      </li>
    </ul>
  </div>
</template>

<script>
import ButaoContacto from "./Butoes/ButaoContacto.vue";
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
  padding-top: 80px;
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
  display: flex;
}
.tracob {
  margin-top: 10px;
  display: flex;
  margin-left: auto;
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
.autorizacao {
  margin-top: 10px;
  text-align: end;
}
.butao {
  margin-left: 250px;
}
.traco a img {
  width: 40px;
  height: auto;
  margin-right: 10px;
}
</style>
