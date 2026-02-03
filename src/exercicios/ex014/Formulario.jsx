// 🎯 Objetivo: Eventos + estado + props
// 🧠 Regras: Input controlado (onChange), Estado guarda o texto, Botão envia (onSubmit), Mostrar o texto digitado

import { useState } from "react"

function Formulario() {
    const [texto, setTexto] = useState()
    const [enviado, setEnviado] = useState()

    function digitou(e) {
        setTexto(e.target.value)
    }

    function enviar(e) {
        e.preventDefault()
        setEnviado(texto)
        setTexto("")
    }

    return (
        <form onSubmit={enviar}>
            <h2>Digite algo</h2>
            <input type="text" name="txt" id="txt" placeholder="Digite algo" onChange={digitou} />
            <button type="submit">Enviar</button>
            <h3>Seu texto</h3>
            <p>Texto enviado: {enviado}</p>
        </form>
    )
}

export default Formulario