import { useState } from "react";

function Ex022() {
    const [texto, setTexto] = useState("");
    const limite = 10;

    function mudarTexto(e) {
        if (e.target.value.length <= limite) {
            setTexto(e.target.value);
        }
    }

    function limparTudo() {
        setTexto("");
    }

    return (
        <>
            <h1>{texto}</h1>
            <p>{texto.length} / {limite}</p>
            <input type="text" value={texto} onChange={mudarTexto} />
            <button onClick={limparTudo}>Limpar texto</button>
        </>
    )
}

export default Ex022