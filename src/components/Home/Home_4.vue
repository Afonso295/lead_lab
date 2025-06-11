<template>
  <div class="home">
    <div class="txt1">
      <span>O seu Marketing.<br />O nosso compromisso.<br /></span>
    </div>
    <div class="txt2">
      <span>
        Assumimos a Gestão do seu departamento de Marketing, ou tornamo-nos a
        extensão perfeita para as suas equipas de Marketing, Recursos Humanos ou
        qualquer outra unidade de negócio que queira crescer no digital.
      </span>
    </div>
    <div class="tabela">
      <ul>
        <div class="cubo">
          <li>
            <samp>Consultoria</samp
            ><span
              >Construímos um plano à medida para definirmos os próximos passos
              da sua marca ou projeto.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Tráfego Pago </samp
            ><span
              >Criamos os seus anúncios online 100% otimizados para obter
              melhores resultados com o menor custo.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Construção de Website</samp
            ><span
              >Criamos desde websites simples a plataformas de e-commerce à
              medida com equipas multidisciplinares.
            </span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <samp>Branding</samp
            ><span
              >Criamos Marcas do zero, construindo uma identidade forte e
              profissional. Já são +90 marcas nos últimos 12 anos.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>E-mail Marketing</samp
            ><span
              >Criamos e implementamos o envio de Newsletters para ativar a sua
              base de clientes internos e externos.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Mentoria & Mindset</samp
            ><span
              >Desenvolvemos mentoria para capacitar profissionais e empresas a
              prosperar no mundo digital.
            </span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <samp>Design Gráfico </samp
            ><span
              >Criamos soluções visuais desde estacionários, flyers, posters,
              stands, roll ups, livros, packaging, merchandising, entre outros.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>SEO e Anúncios </samp
            ><span
              >Ajudamo-lo a destacar-se nas pesquisas do Google e a aumentar a
              visibilidade nos motores de busca.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Formação Financiada</samp
            ><span
              >Formação gratuita para profissionais que desejam adquirir novas
              competências digitais. Inscrições abertas. Vagas Limitadas.
            </span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <samp>Gestão de Redes Sociais</samp
            ><span
              >Gerimos a sua presença profissional nas redes sociais com 3 packs
              "chave na mão" focados em performance.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Eventos Empresariais </samp
            ><span
              >Organização total do evento ou presença para criação de conteúdos
              live com fotografia e/ou vídeos c/drone.
            </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <samp>Formação à Medida</samp
            ><span
              >Criamos formação 100% prática e atual, desenhada por
              especialistas, experientes e no ativo, que lecionam no ensino
              superior.
            </span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_4",
};
</script>

<style scoped>
.home {
  color: aliceblue;
  text-align: center;
  padding: 1px;
  margin-top: 200px;
}
.txt1 {
  font-weight: bold;
  font-size: 59px;
}
.txt2 {
  font-weight: bold;
  font-size: 23px;
  margin-top: 20px;
}
.tabela {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 17px;
  margin-top: 40px;
}
.tabela ul {
  margin: 0px;
  padding: 0px;
}
.cubo {
  background-color: rgb(40, 40, 40);
  border-radius: 20px;
  padding: 15px;
  height: 290px;
  width: 290px;
  box-sizing: border-box;
  margin-bottom: 14px;
  list-style: none;
}
</style>
