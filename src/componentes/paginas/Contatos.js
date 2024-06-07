import styles from './Contatos.module.css'; // Importa o módulo de estilos CSS

function Contatos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Contatos</h1>
      <p className={styles.texto}>
        Você pode entrar em contato conosco através dos seguintes meios:
      </p>
      <ul className={styles.lista}>
        <li className={styles.item}>E-mail: contato@empresa.com</li>
        <li className={styles.item}>Telefone: (XX) XXXX-XXXX</li>
        <li className={styles.item}>Endereço: Rua Principal, 123 - Cidade - Estado</li>
      </ul>
    </div>
  );
}

export default Contatos;
