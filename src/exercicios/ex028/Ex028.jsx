import { useState } from "react";
import EditarNome from "./EditarNome";
import MostrarNome from "./MostrarNome";

function Ex028() {
  const [mostrar, setMostrar] = useState(false);
  const [texto, setTexto] = useState("");

  function show() {
    setMostrar(!mostrar)
  }
    
  return (
    <>
        {mostrar && (
            <>
            <MostrarNome nome={texto} />
            
        </>
        )}
        <EditarNome mudarNome={setTexto} />
      
        <p>
            <button onClick={show}>
                {!mostrar ? "mostrar perfil" : "esconder perfil"}
            </button>
        </p>
    </>
  );
}

export default Ex028;
