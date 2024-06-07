import styles from "./Select.module.css"; // Importa os estilos do arquivo './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form}> {/* Aplica a classe CSS para estilização do formulário */}
      <label htmlFor={name}>{text}:</label> {/* Rótulo do campo de seleção */}
      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange} // Função para lidar com a mudança de valor
        value={value || ''} // Valor selecionado, garante que não seja undefined
      >
        <option value="">Selecione uma opção</option> {/* Opção padrão */}
        {options.map((option) => ( // Mapeia as opções para o componente select
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
