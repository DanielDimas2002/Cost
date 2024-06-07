import { useEffect, useState } from "react";
import Input from "../form/Input"; // Importa o componente Input do diretório ../form
import Select from "../form/Select"; // Importa o componente Select do diretório ../form
import BotaoEnviar from "../form/BotaoEnviar"; // Importa o componente BotaoEnviar do diretório ../form
import styles from "./ProjetosForm.module.css"; // Importa os estilos definidos em ProjetosForm.module.css

function ProjetoForm({ handleSubmit, btnText, dadosProjeto }) {
  // Estado para armazenar as categorias
  const [categoria, setCategoria] = useState([]);
  const [projeto, setProjeto] = useState(dadosProjeto || { name: '', budget: 0, categoria: {} });

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(projeto);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setProjeto({ ...projeto, [name]: value });
  }

  function handleCategoria(e) {
    setProjeto({
      ...projeto,
      categoria: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  // useEffect para buscar as categorias na API quando o componente for montado
  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategoria(data);
      })
      .catch((err) => console.log(err));
  }, []); // Dependência vazia para executar apenas uma vez após o primeiro render

  return (
    <form className={styles.form} onSubmit={submit}> {/* Define o formulário e aplica a classe CSS definida em ProjetosForm.module.css */}
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={projeto.name}
      /> {/* Renderiza o componente Input para o nome do projeto */}
      <Input
        type="number"
        text="Orçamento projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={projeto.budget}
      /> {/* Renderiza o componente Input para o orçamento do projeto */}
      <Select
        name="categoria_id"
        text="Categoria do projeto"
        options={categoria}
        handleOnChange={handleCategoria}
        value={projeto.categoria.id || ""}
      /> {/* Renderiza o componente Select para a categoria do projeto */}
      <BotaoEnviar text={btnText} /> {/* Renderiza o componente BotaoEnviar com o texto especificado */}
    </form>
  );
}

export default ProjetoForm;
