import { useNavigate } from 'react-router-dom';
import ProjetoForm from "../projetos/ProjetosForm";
import styles from "./NovoProjeto.module.css";

function NovoProjeto() {
  // Hook para navegação
  const navigate = useNavigate();

  // Função para criar um novo projeto
  const createPost = (project) => {
    // Enviar o projeto para o backend
    fetch("http://localhost:5000/projetos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      // Redirecionar para a página de projetos com uma mensagem de sucesso
      navigate('/projetos', { state: { mensagem: 'Projeto Criado com Sucesso!' } });
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className={styles.novoprojeto_container}>
      <h1>Crie seu Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NovoProjeto;
