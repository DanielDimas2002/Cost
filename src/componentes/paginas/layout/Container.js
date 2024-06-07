import React from 'react';
import styles from './Container.module.css'; // Importa os estilos CSS do módulo

/**
 * Componente de contêiner genérico que pode aplicar classes CSS personalizadas
 * 
 * @param {object} props - Propriedades passadas ao componente
 * @param {React.ReactNode} props.children - Componentes filhos que serão renderizados dentro do contêiner
 * @param {string} [props.customClass] - Classe CSS opcional para personalização adicional
 */
function Container(props) {
    return (
        // Aplica as classes CSS padrão e personalizadas ao contêiner
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children} {/* Renderiza os componentes filhos */}
        </div>
    );
}

export default Container;
