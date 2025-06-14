<template>
  <nav id="nav">
    <router-link to="/"
      ><img id="logo" src="/img/logo.png" alt="LeadLab"
    /></router-link>

    <div class="menu-toggle">
      <div class="hamburger"></div>
    </div>

    <div id="linknav">
      <router-link to="/">Home</router-link>
      <router-link to="/servicos">Serviços</router-link>
      <router-link to="/formacao">Formação</router-link>
      <router-link to="/workshops">Workshops</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </div>
    <div class="contact-button-wrapper">
      <ButaoContacto />
    </div>
  </nav>
</template>

<script>
import ButaoContacto from "../Butoes/ButaoContacto.vue";
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
  justify-content: space-between;
  background-color: black;
  padding: 15px 30px;
  position: relative;
  min-height: 60px;
  width: 100%;
  box-sizing: border-box;
}

#nav a {
  color: aliceblue;
  text-decoration: none;
  transition: 0.5s;
  padding: 5px 0;
}

#nav a:hover {
  color: rgb(0, 255, 136);
}

#logo {
  height: 45px;
  width: auto;
  z-index: 10;
  position: relative;
}

#linknav {
  display: flex;
  font-size: 20px;
  gap: 60px;
  justify-content: center;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  margin-left: -100px;
}

.menu-toggle {
  display: none;
}

@media (max-width: 1024px) {
  #linknav {
    font-size: 18px;
    gap: 30px;
    margin-left: -80px;
  }
}

@media (max-width: 768px) {
  #nav {
    justify-content: space-between;
    padding: 15px 20px;
  }
  #linknav {
    display: none;
  }
  .contact-button-wrapper {
    display: none;
  }
  .menu-toggle {
    display: block;
    cursor: pointer;
  }
  .hamburger {
    width: 25px;
    height: 3px;
    background-color: white;
    position: relative;
  }
  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: white;
  }
  .hamburger::before {
    top: -8px;
  }
  .hamburger::after {
    top: 8px;
  }
}
</style>
