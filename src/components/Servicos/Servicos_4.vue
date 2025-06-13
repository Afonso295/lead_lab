<template>
  <div class="servicos">
    <Home_4
      :titulo1="titulo1"
      :titulo2="titulo2"
      :subtitulo1="subtitulo1"
      :titulo_consulturia="titulo_consulturia"
      :descricao_consulturia="descricao_consulturia"
      :titulo_trafego_pago="titulo_trafego_pago"
      :descricao_trafego_pago="descricao_trafego_pago"
      :titulo_construcao_de_website="titulo_construcao_de_website"
      :descricao_construcao_de_website="descricao_construcao_de_website"
      :titulo_branding="titulo_branding"
      :descricao_branding="descricao_branding"
      :titulo_email_marketing="titulo_email_marketing"
      :descricao_email_marketing="descricao_email_marketing"
      :titulo_mentoria_mindset="titulo_mentoria_mindset"
      :descricao_mentoria_mindset="descricao_mentoria_mindset"
      :titulo_design_grafico="titulo_design_grafico"
      :descricao_design_grafico="descricao_design_grafico"
      :titulo_seo_e_anuncios="titulo_seo_e_anuncios"
      :descricao_seo_e_anuncios="descricao_seo_e_anuncios"
      :titulo_formacao_financiada="titulo_formacao_financiada"
      :descricao_formacao_financiada="descricao_formacao_financiada"
      :titulo_gestao_de_redes_sociais="titulo_gestao_de_redes_sociais"
      :descricao_gestao_de_redes_sociais="descricao_gestao_de_redes_sociais"
      :titulo_eventos_empresariais="titulo_eventos_empresariais"
      :descricao_eventos_empresariais="descricao_eventos_empresariais"
      :titulo_formacao_a_medida="titulo_formacao_a_medida"
      :descricao_formacao_a_medida="descricao_formacao_a_medida"
    />
  </div>
</template>

<script>
import Home_4 from "../Home/Home_4.vue";

export default {
  name: "Servicos_4",
  components: {
    Home_4,
  },
  data() {
    return {
      titulo_consulturia: "Consultoria Estratégica",
      descricao_consulturia:
        "Analisamos e construímos um plano estratégico personalizado para atingirmos os objetivos da sua marca ou projeto no digital.",
      titulo_trafego_pago: "Gestão de E-mail MKT",
      descricao_trafego_pago:
        "Desde a criação de newsletters a e-mails promocionais, criamos cada etapa do processo para garantir uma dinâmica regular de comunicação por esta via",
      titulo_construcao_de_website: "Neuromarketing",
      descricao_construcao_de_website:
        "Somos parceiros da Split Second Research, empresa prioneira em neurociência do consumidor, oferecemos serviços e formação na área de Neuromarketing.",
      titulo_branding: "Criação de Marca Gráfica",
      descricao_branding:
        "Criamos Marcas do zero, construindo uma identidade coesa que se diferencie no mercado. Já são mais de 90 marcas criadas nos últimos 12 anos.",
      titulo_email_marketing: "Marketing de Conteúdo",
      descricao_email_marketing:
        "Implementamos estratégias de Inbound Marketing focadas na criação de conteúdo para atrair, envolver e fidelizar os seus diferentes públicos-alvos.",
      titulo_mentoria_mindset: "Gestão de Tráfego Pago",
      descricao_mentoria_mindset:
        "Desde a pesquisa até à criação das suas campanhas digitais, otimizamos cada detalhe para alcançar os melhores resultados com um custo mais efetivo.",
      titulo_design_grafico: "Construção de Website",
      descricao_design_grafico:
        "Combinamos design inovador, com performance excecional para criar websites ou landing pages que cativam e acima de tudo que convertem.",
      titulo_seo_e_anuncios: "SEO Strategy",
      descricao_seo_e_anuncios:
        "Destaque-se. nos motores de busca. Do planeamento à otimização, trabalhamos para aumentar a visibilidade dos seus conteúdos e atrair mais tráfego.",
      titulo_formacao_financiada: "Design Gráfico",
      descricao_formacao_financiada:
        "Criamos soluções visuais para uma variedade de meios, desde jornais e revistas até flyers, posters, stands, roll ups, livros, packaging e merchandising.",
      titulo_gestao_de_redes_sociais: "Gestão de Redes Sociais",
      descricao_gestao_de_redes_sociais:
        "Gerimos a sua presença online. Criamos conteúdo profissional, interagimos e gerimos as suas Redes Sociais para se destacar e posicionar no mundo digital.",
      titulo_eventos_empresariais: "Relações Públicas",
      descricao_eventos_empresariais:
        "Desde a criação de Press Releases à Gestão de Eventos, oferecemos suporte abrangente para impulsionar a sua reputação e presença.",
      titulo_formacao_a_medida: "Mentoria & Formação",
      descricao_formacao_a_medida:
        "Formação 100% prática e à medida com especialistas experientes na área. Os nossos formadores lecionam no ensino profissional e superior.",
    };
  },
};
</script>

<style scoped>
.servicos {
  background-color: black;
  color: aliceblue;
  padding: 1px;
}
</style>
