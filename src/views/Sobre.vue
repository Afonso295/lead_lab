<template>
  <div class="sobre">
    <Sobre_1 />
    <Sobre_2 />
    <Sobre_3 />
  </div>
</template>

<script>
import Sobre_1 from "@/components/Sobre/Sobre_1.vue";
import Sobre_2 from "@/components/Sobre/Sobre_2.vue";
import Sobre_3 from "@/components/Sobre/Sobre_3.vue";

export default {
  name: "Sobre",
  components: {
    Sobre_1,
    Sobre_2,
    Sobre_3,
  },
};
</script>
