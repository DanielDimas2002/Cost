import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação
import styles from "./ProjetosCards.module.css"; // Importa os estilos definidos no módulo CSS
import { BsPencil, BsFillTrashFill } from "react-icons/bs"; // Importa os ícones do pacote react-icons

// Define o componente funcional ProjetosCard
function ProjetosCard({ id, name, budget, category, handleremove }) {

  const remove = (e) => {
    e.preventDefault()
    handleremove(id)
  }

  // Renderiza o cartão do projeto
  return (
    <div className={styles.projeto_card}> {/* Aplica a classe CSS do módulo */}
      <h4>{name}</h4> {/* Exibe o nome do projeto */}
      <p>
        <span>Orçamento:</span> R$ {budget} {/* Exibe o orçamento do projeto */}
      </p>
      <p className={styles.categoria_texto}> {/* Aplica a classe CSS para o texto da categoria */}
        <span className={`${styles[category.toLowerCase()]}`}></span> {category} {/* Exibe a categoria do projeto */}
      </p>
      <div className={styles.projeto_card_acoes}> {/* Aplica a classe CSS para as ações do cartão */}
        <Link to={`/projetos/${id}`}> {/* Define o link para a edição do projeto */}
          <BsPencil />Editar {/* Ícone e texto para a ação de editar */}
        </Link>
        <button onClick= {remove}> {/* Botão para a ação de remover */}
          <BsFillTrashFill />Excluir {/* Ícone e texto para a ação de excluir */}
        </button>
      </div>
    </div>
  );
}

export default ProjetosCard; // Exporta o componente para ser utilizado em outros arquivos
