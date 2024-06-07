import { useLocation } from "react-router-dom"; // Importa o hook useLocation do react-router-dom
import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React
import Mensagem from "../paginas/layout/Mensagem"; // Importa o componente Mensagem
import styles from "./Projetos.module.css"; // Importa os estilos definidos em Projetos.module.css
import ProjetosCard from "../projetos/ProjetosCards"; // Importa o componente ProjetosCard
import LinkButton from "./layout/LinkButton"; // Importa o componente LinkButton
import Container from "./layout/Container"; // Importa o componente Container
import Carregamento from "./layout/Carregamento"; // Importa o componente Carregamento

function Projetos() {
  // Define o estado inicial para projetos
  const [projetos, setProjetos] = useState([]);

  // Estado para controlar o carregamento
  const [carregamento, setCarregamento] = useState(true);

  // Estado para mensagens de sucesso relacionadas a projetos
  const [projetoMensagem, setProjetoMensagem] = useState('');

  // Hook para obter a localização atual e o estado passado pelo navigate
  const localizacao = useLocation();
  const { state } = localizacao;
  let mensagem = "";

  // Se há uma mensagem no estado, define a variável mensagem
  if (state && state.mensagem) {
    mensagem = state.mensagem;
  }

  // useEffect para buscar os projetos na API quando o componente for montado
  useEffect(() => {
    fetch("http://localhost:5000/projetos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // Converte a resposta da API para JSON
      .then((data) => {
        console.log(data); // Log dos dados recebidos para verificação
        setProjetos(data); // Atualiza o estado dos projetos com os dados recebidos
        setCarregamento(false); // Define carregamento como falso após carregar os dados
      })
      .catch((err) => {
        console.log(err); // Log de erros, caso ocorram
        setCarregamento(false); // Define carregamento como falso mesmo em caso de erro
      });
  }, []); // Dependência vazia para executar apenas uma vez após o primeiro render

  // Função para remover projetos
  function removeProjetos(id) {
    fetch(`http://localhost:5000/projetos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        // Atualiza a lista de projetos após a remoção
        setProjetos(projetos.filter((projeto) => projeto.id !== id));
        setProjetoMensagem('Projeto removido com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.projeto_container}>
      <div className={styles.titulo_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/novoprojeto" text="Projeto Novo" /> {/* Botão para adicionar um novo projeto */}
      </div>
      {mensagem && <Mensagem type="sucesso" text={mensagem} />} {/* Exibe a mensagem de sucesso se houver */}
      {projetoMensagem && <Mensagem type="sucesso" text={projetoMensagem} />} {/* Exibe mensagem de sucesso após remoção */}
      <Container customClass="start">
        {projetos.length > 0 ? (
          projetos.map((projeto) =>
            projeto && projeto.categoria && projeto.categoria.name ? ( // Verifica se projeto e projeto.categoria estão definidos e possuem a propriedade name
              <ProjetosCard
                name={projeto.name}
                id={projeto.id}
                budget={projeto.budget}
                category={projeto.categoria.name}
                key={projeto.id}
                handleremove={removeProjetos} // Passa a função de remoção como prop
              />
            ) : null
          )
        ) : (
          !carregamento && <p>Não há projetos cadastrados</p> // Mensagem de fallback se não houver projetos e não estiver carregando
        )}
      </Container>
      {carregamento && <Carregamento />} {/* Exibe o componente de carregamento enquanto está carregando */}
    </div>
  );
}

export default Projetos;
