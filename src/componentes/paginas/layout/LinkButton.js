// Importa os estilos definidos em LinkButton.module.css
import styles from "./LinkButton.module.css";

// Importa o componente Link do react-router-dom para navegação interna
import { Link } from "react-router-dom";

// Define o componente LinkButton, que aceita as propriedades `to` e `text`
function LinkButton({ to, text }) {
  return (
    // Renderiza um Link com a rota `to` e o texto `text`, aplicando a classe CSS `btn`
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  );
}

// Exporta o componente LinkButton para ser utilizado em outras partes do aplicativo
export default LinkButton;
