<template>
  <nav id="nav">
    <router-link to="/"
      ><img id="logo" src="/img/logo.png" alt="LeadLab"
    /></router-link>
    <div id="linknav">
      <router-link to="/">Home</router-link>
      <router-link to="/servicos">Serviços</router-link>
      <router-link to="/formacao">Formação</router-link>
      <router-link to="/workshops">Workshops</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </div>
    <ButaoContacto />
  </nav>
</template>

<script>
import ButaoContacto from "../Navbar/ButaoContacto.vue";
export default {
  name: "Navbar",
  components: {
    ButaoContacto,
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  background-color: black;
  padding: 30px;
  position: relative;
  font-family: Arial;
  height: 6vh;
}
#nav a {
  color: aliceblue;
  text-decoration: none;
  transition: 0.5s;
}

#nav a:hover {
  color: rgb(0, 255, 136);
}

#logo {
  height: 5vh;
  width: auto;
  margin-left: 30px;
  z-index: 2; /* garante que o logo fica acima */
  position: relative;
}

#linknav {
  display: flex;
  font-size: 20px;
  gap: 80px;
  justify-content: left;
  margin-left: -130px;
  flex-grow: 1;
  position: relative;
  justify-content: center;
  z-index: 1;
}
</style>
