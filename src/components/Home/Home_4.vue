<template>
  <div class="home">
    <div class="txt1">
      <div>{{ titulo1 }}</div>
      <span>{{ titulo2 }}</span>
    </div>
    <div class="txt2">
      <span>
        {{ subtitulo1 }}
      </span>
    </div>
    <div class="tabela">
      <ul>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/1.1.png" alt="Consultoria" />
            </div>
            <div class="txt3">{{ titulo_consulturia }}</div>
            <span class="txt4">{{ descricao_consulturia }}</span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/2.1.png" alt="Tráfego Pago" />
            </div>
            <div class="txt3">{{ titulo_trafego_pago }}</div>
            <span class="txt4">{{ descricao_trafego_pago }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/3.1.png" alt="Construção de Website" />
            </div>
            <div class="txt3">{{ titulo_construcao_de_website }}</div>
            <span class="txt4">{{ descricao_construcao_de_website }} </span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/1.2.png" alt="Branding" />
            </div>
            <div class="txt3">{{ titulo_branding }}</div>
            <span class="txt4">{{ descricao_branding }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/2.2.png" alt="E-mail Marketing" />
            </div>
            <div class="txt3">{{ titulo_email_marketing }}</div>
            <span class="txt4">{{ descricao_email_marketing }}</span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/3.2.png" alt="Mentoria & Mindset" />
            </div>
            <div class="txt3">{{ titulo_mentoria_mindset }}</div>
            <span class="txt4">{{ descricao_mentoria_mindset }}</span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/1.3.png" alt="Design Gráfico" />
            </div>
            <div class="txt3">{{ titulo_design_grafico }}</div>
            <span class="txt4">{{ descricao_design_grafico }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/2.3.png" alt="SEO e Anúncios" />
            </div>
            <div class="txt3">{{ titulo_seo_e_anuncios }}</div>
            <span class="txt4">{{ descricao_seo_e_anuncios }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/3.3.png" alt="Formação Financiada" />
            </div>
            <div class="txt3">{{ titulo_formacao_financiada }}</div>
            <span class="txt4">{{ descricao_formacao_financiada }} </span>
          </li>
        </div>
      </ul>
      <ul>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/1.4.png" alt="Gestão de Redes Sociais" />
            </div>
            <div class="txt3">{{ titulo_gestao_de_redes_sociais }}</div>
            <span class="txt4">{{ descricao_gestao_de_redes_sociais }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/2.4.png" alt="Eventos Empresariais" />
            </div>
            <div class="txt3">{{ titulo_eventos_empresariais }}</div>
            <span class="txt4">{{ descricao_eventos_empresariais }} </span>
          </li>
        </div>
        <div class="cubo">
          <li>
            <div class="img">
              <img src="/img/Icons/3.4.png" alt="Formação à Medida" />
            </div>
            <div class="txt3">{{ titulo_formacao_a_medida }}</div>
            <span class="txt4">{{ descricao_formacao_a_medida }} </span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_4",
  props: {
    titulo1: {
      type: String,
      default: "O seu Marketing.",
    },
    titulo2: {
      type: String,
      default: "O nosso compromisso.",
    },
    subtitulo1: {
      type: String,
      default:
        "Assumimos a Gestão do seu departamento de Marketing, ou tornamo-nos a extensão perfeita para as suas equipas de Marketing, Recursos Humanos ou qualquer outra unidade de negócio que queira crescer no digital.",
    },
    titulo_consulturia: {
      type: String,
      default: "Consultoria",
    },
    descricao_consulturia: {
      type: String,
      default:
        "Construímos um plano à medida para definirmos os próximos passos da sua marca ou projeto.",
    },
    titulo_trafego_pago: {
      type: String,
      default: "Tráfego Pago",
    },
    descricao_trafego_pago: {
      type: String,
      default:
        "Criamos os seus anúncios online 100% otimizados para obter melhores resultados com o menor custo.",
    },
    titulo_construcao_de_website: {
      type: String,
      default: "Construção de Website",
    },
    descricao_construcao_de_website: {
      type: String,
      default:
        "Criamos desde websites simples a plataformas de e-commerce à medida com equipas multidisciplinares.",
    },
    titulo_branding: {
      type: String,
      default: "Branding",
    },
    descricao_branding: {
      type: String,
      default:
        "Criamos Marcas do zero, construindo uma identidade forte e profissional. Já são +90 marcas nos últimos 12 anos.",
    },
    titulo_email_marketing: {
      type: String,
      default: "E-mail Marketing",
    },
    descricao_email_marketing: {
      type: String,
      default:
        "Criamos e implementamos o envio de Newsletters para ativar a sua base de clientes internos e externos.",
    },
    titulo_mentoria_mindset: {
      type: String,
      default: "Mentoria & Mindset",
    },
    descricao_mentoria_mindset: {
      type: String,
      default:
        "Desenvolvemos mentoria para capacitar profissionais e empresas a prosperar no mundo digital.",
    },
    titulo_design_grafico: {
      type: String,
      default: "Design Gráfico",
    },
    descricao_design_grafico: {
      type: String,
      default:
        "Criamos soluções visuais desde estacionários, flyers, posters, stands, roll ups, livros, packaging, merchandising, entre outros.",
    },
    titulo_seo_e_anuncios: {
      type: String,
      default: "SEO e Anúncios",
    },
    descricao_seo_e_anuncios: {
      type: String,
      default:
        "Ajudamo-lo a destacar-se nas pesquisas do Google e a aumentar a visibilidade nos motores de busca.",
    },
    titulo_formacao_financiada: {
      type: String,
      default: "Formação Financiada",
    },
    descricao_formacao_financiada: {
      type: String,
      default:
        "Formação gratuita para profissionais que desejam adquirir novas competências digitais. Inscrições abertas. Vagas Limitadas.",
    },
    titulo_gestao_de_redes_sociais: {
      type: String,
      default: "Gestão de Redes Sociais",
    },
    descricao_gestao_de_redes_sociais: {
      type: String,
      default:
        "Gerimos a sua presença profissional nas redes sociais com 3 packs 'chave na mão' focados em performance.",
    },
    titulo_eventos_empresariais: {
      type: String,
      default: "Eventos Empresariais",
    },
    descricao_eventos_empresariais: {
      type: String,
      default:
        "Organização total do evento ou presença para criação de conteúdos live com fotografia e/ou vídeos c/drone.",
    },
    titulo_formacao_a_medida: {
      type: String,
      default: "Formação à medida",
    },
    descricao_formacao_a_medida: {
      type: String,
      default:
        "Criamos formação 100% prática e atual, desenhada por especialistas, experientes e no ativo, que lecionam no ensino superior.",
    },
  },
};
</script>

<style scoped>
.home {
  color: aliceblue;
  text-align: center;
  padding: 1px;
  margin-top: 150px;
}
.txt1 {
  font-weight: bold;
  font-size: 59px;
}
.txt2 {
  font-weight: bold;
  font-size: 23px;
  margin: 20px auto 0 auto;
  width: fit-content;
  max-width: 1200px;
}
.txt3 {
  display: block;
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 18px;
  color: rgb(17, 255, 124);
}
.txt4 {
  font-size: 17 px;
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
  background-color: rgb(26, 26, 26);
  border-radius: 20px;
  padding: 15px;
  height: 305px;
  width: 290px;
  box-sizing: border-box;
  margin-bottom: 14px;
  list-style: none;
}
.img {
  display: flex;
  justify-content: center;
}
.img img {
  width: 55px;
  height: 50px;
  display: flex;
}
</style>
