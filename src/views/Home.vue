<template>
  <div id="home">
    <Home_1 />
    <Home_2 />
    <Home_3 />
    <home_4 />
    <Home_5 />
    <Home_6 />
  </div>
</template>
<script>
import Home_1 from "@/components/Home/Home_1.vue";
import Home_2 from "@/components/Home/Home_2.vue";
import Home_3 from "@/components/Home/Home_3.vue";
import Home_4 from "@/components/Home/Home_4.vue";
import Home_5 from "@/components/Home/Home_5.vue";
import Home_6 from "@/components/Home/Home_6.vue";

export default {
  name: "Home",
  components: {
    Home_1,
    Home_2,
    Home_3,
    Home_4,
    Home_5,
    Home_6,
  },
};
</script>

<style scoped>
#home {
  background-color: black;
}
</style>
