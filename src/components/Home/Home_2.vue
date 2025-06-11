<template>
  <div id="home">
    <div class="txt1">Destaques</div>
    <div class="txt2">
      Conheça os nossos contributos, eventos e oportunidades relacionadas com
      futuro do Marketing Digital e Gestão de Redes Sociais.
    </div>
    <div class="galeriaimgs">
      <ul>
        <li class="imgcontainer">
          <img src="/img/Home/RedeEmpresario.png" alt="" />
          <div class="img-texto">
            Lead Lab junta-se à Rede do <br />Empresário na área Digital
          </div>
          <div class="img-descricao">
            Com +10.000 empresas no grupo,<br />
            somos parceiro na área digital.
          </div>
        </li>
        <li class="imgcontainer">
          <img src="/img/Home/AmoraFC.png" alt="" />
          <div class="img-texto">
            Lead Lab é patrocinador <br />oficial do Amora FC
          </div>
          <div class="img-descricao">
            A equipa da Lead Lab vai a jogo<br />
            como patrocinador oficial nas<br />
            modalidades de futebol e futsal.
          </div>
        </li>
      </ul>
      <ul>
        <li class="imgcontainer">
          <img src="/img/Home/WorldSkillsPortugal.png" alt="" />
          <div class="img-texto">
            <br />Lead Lab e IEFP juntos na Qualificação para a
            Internacionalização
          </div>
          <div class="img-descricao">
            Abertas as candidaturas para os próximos programas, que terão início
            já em janeiro<br />
            de 2025.
          </div>
        </li>
        <li class="imgcontainer">
          <img src="/img/Home/Digital-Innovation.png" alt="" />
          <div class="img-texto">
            Lead Lab em destaque<br />
            no WorldSkills Portugal 2024
          </div>
          <div class="img-descricao">
            "Branding na Era da IA" foi o nosso<br />
            tema no evento que reuniu +1400<br />
            participantes no Europarque.
          </div>
          <img
            class="imgul"
            src="/img/Home/MarketingDigital-IA-UniversidadePortucalense.png"
            alt=""
          />
          <div class="imgul-texto">
            Pós-Graduação em<br />
            Marketing Digital e IA
          </div>
          <div class="imgul-descricao">
            Filipe Monteiro, CEO da Lead Lab, faz<br />
            parte do corpo docente na<br />
            Universidade Portucalense.
          </div>
        </li>
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
  margin-top: 100px;
  font-size: 59px;
  font-weight: bold;
  text-align: center;
  max-width: 1050px;
  margin-left: 150px;
}
.txt2 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  max-width: 1050px;
  margin-left: 150px;
}

.imgcontainer {
  display: block;
}
.img-texto {
  position: absolute;
  margin-top: 21vh;
  margin-left: 6vh;
  text-align: left;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 20px;
}
.imgul-texto {
  position: absolute;
  margin-top: 21vh;
  margin-left: 73vh;
  text-align: left;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 20px;
}
.img-descricao {
  position: absolute;
  margin-top: 31vh;
  margin-left: 6vh;
  text-align: left;
  padding: 8px 12px;
  font-size: 18px;
}
.imgul-descricao {
  position: absolute;
  margin-top: 31vh;
  margin-left: 73vh;
  text-align: left;
  padding: 8px 12px;
  font-size: 18px;
}
.galeriaimgs {
  margin-top: 70px;
  display: flex;
  justify-content: center;
}
.galeriaimgs ul {
  list-style: none;
  margin-left: -35px;
}
.galeriaimgs li {
  display: flex;
  padding: 7px;
}
.galeriaimgs img {
  height: 50vh;
  width: auto;
  border-radius: 5px;
}

.imgul {
  margin-left: 3vh;
}
</style>
