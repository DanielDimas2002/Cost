import styles from './Projeto.module.css'; // Importa os estilos definidos em Projeto.module.css
import { useParams } from 'react-router-dom'; // Importa o hook useParams do react-router-dom
import { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect do React
import Carregamento from './layout/Carregamento'; // Importa o componente Carregamento
import Container from './layout/Container'; // Importa o componente Container
import ProjetosForm from '../projetos/ProjetosForm'; // Importa o componente ProjetosForm
import Mensagem from "../../componentes/paginas/layout/Mensagem"; // Importa o componente Mensagem
import ServicoFormu from '../Serviços/ServicoFormu'; // Importa o componente ServicoFormu

import ServicoCard  from "../Serviços/ServicoCard"

import { parse, v4 as uuidv4 } from "uuid"; // Importa funções do uuid

function Projeto() {
  const { id } = useParams(); // Obtém o ID do projeto dos parâmetros da URL

  const [projeto, setProjeto] = useState({}); // Define o estado inicial para o projeto como um objeto vazio
  const [servicos, setServicos] = useState([]); // Define o estado inicial para os serviços como um array vazio
  const [showProjetoFormu, setShowProjetoFormu] = useState(false); // Estado para controlar a exibição do formulário de edição
  const [showFormuServico, setShowFormuServico] = useState(false); // Estado para controlar a exibição do formulário de serviço
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar mensagens
  const [type, setType] = useState(''); // Estado para armazenar o tipo de mensagem

  useEffect(() => {
    fetch(`http://localhost:5000/projetos/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json()) // Converte a resposta da API para JSON
      .then((data) => {
        setProjeto(data); // Atualiza o estado do projeto com os dados recebidos
        setServicos(data.servicos || []); // Atualiza o estado dos serviços com os dados recebidos ou um array vazio se não houver serviços
      })
      .catch((err) => console.log(err)); // Log de erros, caso ocorram
  }, [id]); // Dependência do useEffect para executar quando o ID mudar

  function editarPost(projeto) {
    setMensagem('');
    
    if (parseFloat(projeto.budget) < parseFloat(projeto.cost)) {
      setMensagem('O orçamento não pode ser menor que o custo.');
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projetos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projeto),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data);
        setShowProjetoFormu(false);  
        setMensagem('Atualização bem sucedida!');
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function removeServico(id, cost){
    const atualizaServico = projeto.servicos.filter((servico) => servico.id !== id)
    let projetoAtualizado = { ...projeto };
projetoAtualizado.servicos = atualizaServico;
projetoAtualizado.cost = parseFloat(projetoAtualizado.cost) - parseFloat(cost);

    projetoAtualizado.cost = parseFloat(projetoAtualizado.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projeto/${projetoAtualizado.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type" : "applicaation/json"
      }, body: JSON.stringify(projetoAtualizado)
    }).then((data) =>{
      setProjeto(projetoAtualizado)
      setServicos(atualizaServico)
      setMensagem("Serviço removido com sucesso!")
    }).catch(err => console.log(err))


  }

  function criarServico(servico) {
    const updatedProjeto = { ...projeto };

    // Garantir que o array de serviços está definido
    if (!updatedProjeto.servicos) {
      updatedProjeto.servicos = [];
    }

    // Adicionar um ID único ao novo serviço
    servico.id = uuidv4();

    // Calcular o novo custo total do projeto
    const novoCusto = parseFloat(projeto.cost) + parseFloat(servico.cost);

    // Verificar se o novo custo ultrapassa o orçamento
    if (novoCusto > parseFloat(updatedProjeto.budget)) {
      setMensagem("Orçamento ultrapassado, verifique o valor do serviço!");
      setType("error");
      return false;
    }

    // Adicionar o novo serviço ao array de serviços
    updatedProjeto.servicos.push(servico);

    // Atualizar o custo total do projeto
    updatedProjeto.cost = novoCusto;

    // Atualizar o projeto no backend
    fetch(`http://localhost:5000/projetos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProjeto),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data);
        setServicos(updatedProjeto.servicos); // Atualiza o estado dos serviços
        setShowFormuServico(false);
        setMensagem('Serviço adicionado com sucesso!');
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjetoFormu() {
    setShowProjetoFormu(!showProjetoFormu); // Alterna o estado do formulário de edição
  }

  function toggleFormuServico() {
    setShowFormuServico(!showFormuServico); // Alterna o estado do formulário de adição de serviço
  }

  return (
    <>
      {projeto.name ? ( // Verifica se o projeto foi carregado
        <div className={styles.projeto_detalhes}>
          <Container customClass="column">
            {mensagem && <Mensagem type={type} mensagem={mensagem} />}
            <div className={styles.detalhes_container}>
              <h1>{projeto.name}</h1>
              <button onClick={toggleProjetoFormu} className={styles.btn}>
                {!showProjetoFormu ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjetoFormu ? ( // Verifica se o formulário de edição deve ser exibido
                <div className={styles.projeto_info}>
                  <p>
                    <span>Categoria:</span> {projeto.categoria.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${projeto.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${projeto.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projeto_info}>
                  <ProjetosForm
                    handleSubmit={editarPost}
                    btnText="Concluir Edição"
                    projetoData={projeto}
                  />
                </div>
              )}
            </div>
            <div className={styles.servicos_formu_container}>
              <h2>Adicionar Serviços</h2>
              <button onClick={toggleFormuServico} className={styles.btn}>
                {!showFormuServico ? 'Adicionar Serviço' : 'Fechar'}
              </button>
              <div className={styles.projeto_info}>
                {showFormuServico && (
                  <ServicoFormu
                    handleSubmit={criarServico}
                    textBtn="Adicionar Serviços"
                    projetosDados={projeto}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass='start'>
              {servicos.length > 0 ? (
                servicos.map((servico) => (
                  <ServicoCard
                  id = {servico.id}
                  name = {servico.name}
                  cost = {servico.cost}
                  descricao = {servico.descricao}
                  key={servico.id}
                  handleRemove = {removeServico}
                  />
                ))
              ) : (
                <p>Não há serviços cadastrados!</p>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Carregamento /> // Exibe o componente de carregamento enquanto os dados estão sendo carregados
      )}
    </>
  );
}

export default Projeto;
