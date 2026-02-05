import { useState } from "react"
import Perfil from "./Perfil"
import Botao from "./Botao"

function Ex016() {
    const [mostrarPerfil, setMostrarPerfil] = useState(false)

    function show() {
        setMostrarPerfil(!mostrarPerfil)
    }

    return (
        <>
            <h1>teste</h1>
            <Botao texto={mostrarPerfil ? "Esconder perfil" : "Mostrar perfil"} onClick={show} />

            {mostrarPerfil && <Perfil />}
        </>
    )
}

export default Ex016