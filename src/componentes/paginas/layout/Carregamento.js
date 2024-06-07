import carregando from "../../img/Rolling@1x-1.0s-200px-200px.svg"

import styles from "./Carregamento.module.css"

function Carregamento(){

    return(
        <div className = {styles.carregar_container}>
            <img className = {styles.carregar} src = {carregando} alt="Carregando" />
        </div>
    )

} export default Carregamento