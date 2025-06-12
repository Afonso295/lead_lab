<template>
  <div id:servicos>
    <Servicos-1 />
    <Servicos-2 />
  </div>
</template>

<script>
import Servicos1 from "@/components/Servicos/Servicos1.vue";
import Servicos2 from "@/components/Servicos/Servicos2.vue";

export default {
  name: "Servicos",
  components: {
    Servicos1,
    Servicos2,
  },
};
</script>
