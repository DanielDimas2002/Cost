import style from "./Mensagem.module.css";
import { useState, useEffect } from "react";

function Mensagem({ type, text }) {
  const [visibilidade, setVisibilidade] = useState(false);

  useEffect(() => {
    // Se não há texto, não mostra a mensagem
    if (!text) {
      setVisibilidade(false);
      return;
    }

    // Mostra a mensagem
    setVisibilidade(true);

    // Define um temporizador para esconder a mensagem após 3 segundos
    const tempo = setTimeout(() => {
      setVisibilidade(false);
    }, 3000);

    // Limpa o temporizador se o componente for desmontado antes dos 3 segundos
    return () => clearTimeout(tempo);
  }, [text]);

  return (
    <>
      {visibilidade && (
        <div className={`${style.mensagem} ${style[type]}`}>
          {text}
        </div>
      )}
    </>
  );
}

export default Mensagem;
