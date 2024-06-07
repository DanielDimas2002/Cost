import styles from "./Companhia.module.css"

function Campanhia() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo ao Campanhia</h1>
      <p className={styles.texto}>
        Esta é a página da Campanhia, onde você pode tocar para chamar a atenção ou obter mais informações sobre nossos produtos e serviços.
      </p>
      <p className={styles.texto}>
        Sinta-se à vontade para explorar e nos contatar caso tenha alguma dúvida ou necessidade de assistência.
      </p>
    </div>
  );
}

export default Campanhia;
