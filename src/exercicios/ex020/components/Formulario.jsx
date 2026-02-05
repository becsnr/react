import { useState } from "react"
import Botao from "./Botao"

function Formulario({enviarDados}) {
    const [nomeDigitado, setNomeDigitado] = useState("")
    const [idadeDigitado, setIdadeDigitado] = useState("")

    function enviar() {
        enviarDados(nomeDigitado, idadeDigitado)
    }

    return (
        <>
            <p><input type="text" name="nome" id="nome" placeholder="Nome" value={nomeDigitado} onChange={(e) => setNomeDigitado(e.target.value)} /></p>

            <p><input type="number" name="idade" id="idade" placeholder="Idade" value={idadeDigitado} onChange={(e) => setIdadeDigitado(e.target.value)} /></p>

            <Botao onClick={enviar} />
        </>
    )
}

export default Formulario