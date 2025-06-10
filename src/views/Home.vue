<template>
  <div id="home">
    <Home_1 />
    <Home_2 />
  </div>
</template>
<script>
import Home_1 from "@/components/Home/Home_1.vue";
import Home_2 from "@/components/Home/Home_2.vue";

export default {
  name: "Home",
  components: {
    Home_1,
    Home_2,
  },
};
</script>

<style scoped>
#home {
  background-color: black;
}
</style>
