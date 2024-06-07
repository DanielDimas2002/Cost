import styles from "./BotaoEnviar.module.css"; // Importa os estilos do arquivo './BotaoEnviar.module.css'

function BotaoEnviar({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button> {/* Renderiza o botão com a classe de estilo especificada */}
    </div>
  );
}

export default BotaoEnviar;
