import styles from "../projetos/ProjetosCards.module.css"

import {BsFillTrashFill} from "react-icons/bs"

function ServicoCard({id, name, cost, descricao, handleRemove}){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
<div className={styles.projeto_card}>
     <h4>{name}</h4>   
     <p><span>Custo Total: </span>R${cost}</p>
     <p>{descricao}</p>
     <div className={styles.projeto_card_acoes}>
        <button onClick={remove}><BsFillTrashFill/>Excluir</button>
     </div>
</div>
    )

} export default ServicoCard