// Importando o módulo CSS para estilizar o componente Home
import style from "./Home.module.css";
// Importando a imagem que será exibida na página inicial
import imagem from "../img/Imagem_Cost.png";
import LinkButton from "../paginas/layout/LinkButton";
// Importando o componente LinkButton para criar um botão de link


// Função que define o componente Home
function Home() {
  return (
    // Seção principal do componente Home, usando as classes de estilo definidas em Home.module.css
    <section className={style.home_container}>
      {/* Cabeçalho da página inicial */}
      <h1>Bem-vindo ao <span>Costs</span></h1>
      {/* Parágrafo de introdução */}
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      {/* Botão de link para criar um novo projeto */}
      <LinkButton to = "/novoprojeto" text="Projeto Novo"></LinkButton>
      {/* Imagem ilustrativa da página inicial */}
      <img src={imagem} alt="Costs" />
    </section>
  );
}

// Exportando o componente Home para ser utilizado em outras partes do aplicativo
export default Home;
