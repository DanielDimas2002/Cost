import styles from "../projetos/ProjetosForm.module.css";
import { useState } from "react";
import BotaoEnviar from "../form/BotaoEnviar";
import Input from "../form/Input";

function ServicoFormu({ handleSubmit, textBtn, projetosDados }) {
  const [servico, setServico] = useState({
    name: '',
    cost: '',
    description: ''
  });

  function submit(e) {
    e.preventDefault();
    handleSubmit(servico); // Enviar os dados do serviço
  }

  function handleChange(e) {
    setServico({ ...servico, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
        value={servico.name}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor do serviço"
        handleOnChange={handleChange}
        value={servico.cost}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
        value={servico.description}
      />
      <BotaoEnviar text={textBtn} />
    </form>
  );
}

export default ServicoFormu;
