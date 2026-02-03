// 🎯 Objetivo
// Usar useState + evento
// 🧠 Regras
// Estado inicia em 0, Botão +, Botão -, Valor aparece na tela

import { useState } from "react";

function Contador() {
    const [cont, setCont] = useState(0)

    function diminuir() {
        setCont(cont - 1)
    }

    function aumentar() {
        setCont(cont + 1)
    }

    return (
        <>
            <h1>Contador</h1>
            <p>{cont}</p>
            <button type="button" onClick={diminuir} >-</button>
            <button type="button" onClick={aumentar} >+</button>
        </>
    )
}

export default Contador