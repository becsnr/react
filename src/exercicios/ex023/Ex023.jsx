import { useState } from "react";
import Mensagem from "./Mensagem";

function Ex023() {
    const [texto, setTexto] = useState("");

    function receberTexto(valor) {
        setTexto(valor);
    }

    return (
        <>
            <h1>{texto}</h1>
            <Mensagem enviar={receberTexto} />
        </>
    )
}

export default Ex023;