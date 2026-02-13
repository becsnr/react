import { useState } from "react";
import Botao from "./Botoes";

function Ex024() {
    const [valor, setValor] = useState('');

    function feliz() {
        setValor('😀 tô feliz 😀');
    }

    function triste() {
        setValor('😢 tô triste 😢');
    }

    function raiva() {
        setValor('😡 tô com raiva 😡');
    }

    return (
        <>
            <p>{valor}</p>
            <Botao onFeliz={feliz} onTriste={triste} onRaiva={raiva} />
        </>
        
    )
}

export default Ex024