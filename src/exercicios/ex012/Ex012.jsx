import Mensagem from "./Mensagem";
import { useState } from "react";

function Ex012() {
    const [tipoMsg, setTipoMsg] = useState()

    function certo() {
        setTipoMsg("sucesso")
    }

    function errado() {
        setTipoMsg("erro")
    }

    return (
        <>
            <p>
                <Mensagem tipo={tipoMsg} />
            </p>
            <button type="button" onClick={certo}>Sucesso</button>
            <button type="button" onClick={errado}>Fracasso</button>
        </>
    )
}

export default Ex012