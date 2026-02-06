import { useState } from "react";
import Humor from "./Humor";

function Ex021() {
    const [emocao, setEmocao] = useState("")

    function mostrarEmocao(receberEmocao) {
        setEmocao(receberEmocao)
    }

    return (
        <>
            <p>{emocao}</p>
            <Humor onClick={mostrarEmocao} />
        </>
    )
}

export default Ex021