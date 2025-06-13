<template>
  <div>
    <Servicos_1 />
    <Servicos_2 />
    <Servicos_3 />
    <Servicos_4 />
    <Servicos_5 />
  </div>
</template>

<script>
import Servicos_1 from "@/components/Servicos/Servicos_1.vue";
import Servicos_2 from "@/components/Servicos/Servicos_2.vue";
import Servicos_3 from "@/components/Servicos/Servicos_3.vue";
import Servicos_4 from "@/components/Servicos/Servicos_4.vue";
import Servicos_5 from "@/components/Servicos/Servicos_5.vue";

export default {
  name: "Servicos",
  components: {
    Servicos_1,
    Servicos_2,
    Servicos_3,
    Servicos_4,
    Servicos_5,
  },
};
</script>
