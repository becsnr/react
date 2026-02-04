import { useState } from "react"
import Botao from "./Botao"

function Ex016() {
    const [mostrar, setMostrar] = useState(true)

    function show() {
        setMostrar(!mostrar)
    }

    return (
        <>
            <Botao texto={"Mostrar / Esconder texto"} onClick={show} />

            {mostrar && <p>Esse texto aparece e some</p>}
        </>
    )
}

export default Ex016