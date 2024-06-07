
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/Logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        {/* Link para a página inicial */}
        <Link to="/">
          <img alt="Costs" src={logo} className={styles.img} />
        </Link>
        <ul className={styles.list}>
          {/* Link para a página da companhia */}
          <li className={styles.item}>
            <Link to="/companhia">Companhia</Link>
          </li>
          {/* Link para a página de novo projeto */}
          <li className={styles.item}>
            <Link to="/novoprojeto">Novo Projeto</Link>
          </li>
          {/* Link para a página de projetos */}
          <li className={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
          {/* Link para a página de contatos */}
          <li className={styles.item}>
            <Link to="/contatos">Contatos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;