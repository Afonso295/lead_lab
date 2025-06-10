<template>
  <div id="home">
    <div class="txt1">Destaques</div>
    <div class="txt2">
      Conheça os nossos contributos, eventos e oportunidades relacionadas com
      futuro do Marketing Digital e <br />Gestão de Redes Sociais.
    </div>
    <div class="galeriaimgs">
      <ul>
        <li><img src="/img/Home/RedeEmpresario.png" alt="" /></li>
        <li><img src="/img/Home/AmoraFC.png" alt="" /></li>
      </ul>
      <ul>
        <li><img src="/img/Home/WorldSkillsPortugal.png" alt="" /></li>
        <li><img src="/img/Home/Digital-Innovation.png" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home2",
};
</script>

<style scoped>
#home {
  color: aliceblue;
}

.txt1 {
  margin-top: 170px;
  font-size: 59px;
  font-weight: bold;
  text-align: center;
}
.txt2 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}

.galeriaimgs {
  margin-top: 70px;
  display: flex;
  justify-content: center;
}
.galeriaimgs ul {
  list-style: none;
  margin-left: -6vh;
}
.galeriaimgs li {
  display: flex;
  padding: 10px;
}
.galeriaimgs img {
  height: 50vh;
  width: auto;
}
</style>
