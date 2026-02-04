// Componentes: Perfil, Card, Botao
// Requisitos: Perfil recebe: nome, idade
// Usa useState pra mostrar/ocultar perfil; Card usa children; Botao dispara evento; Tudo com propTypes

import { useState } from "react";
import Card from "./components/Card";
import Perfil from "./components/Perfil";
import Botao from "./components/Botao";

function Ex015() {
    const [mostrar, setMostrar] = useState(true)

    function show() {
        setMostrar(!mostrar)
    }

    return (
        <Card>
            <h1>Perfil</h1>

            {mostrar && <Perfil nome={"Jungkook"} idade={28} />}

            

            <Botao texto={"Mostrar perfil / esconder"} aoClicar={show} />
        </Card>
    )
}

export default Ex015;