// 🎯 Objetivo
// Usar useState + evento
// 🧠 Regras
// Estado inicia em 0, Botão +, Botão -, Valor aparece na tela

import { useState } from "react"

function Contador() {
    const [numero, setNumero] = useState(0)

    function subtracao() {
        setNumero(numero - 1)
    }

    function soma() {
        setNumero(numero + 1)
    }

    return (
        <>
            <h2>Contador</h2>
            <p>{numero}</p>
            
            <button type="button" onClick={subtracao}>-</button>
            
            <button type="button" onClick={soma}>+</button>
        </>
    )
}

export default Contador