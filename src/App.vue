<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}
</style>
