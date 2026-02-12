import { useState } from "react";

function Ex024() {
    const [valor, setValor] = useState(0);

    function somar() {
        if (valor < 10) {
            setValor(valor + 1)
        }
    }

    function subtrair() {
        if (valor > 0) {
            setValor(valor - 1)
        }
    }

    return (
        <>
            <p>{valor}</p>

            <button type="button" onClick={somar}>+</button>

            <button type="button" onClick={subtrair}>-</button>
        </>
        
    )
}

export default Ex024