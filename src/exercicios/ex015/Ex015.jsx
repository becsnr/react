// Componentes: Perfil, Card, Botao
// Requisitos: Perfil recebe: nome, idade
// Usa useState pra mostrar/ocultar perfil; Card usa children; Botao dispara evento; Tudo com propTypes

import { useState } from "react";
import Card from "./components/Card";
import Perfil from "./components/Perfil";

function Ex015() {
    const [nome, setNome] = useState("Jungkook")
    const [idade, setIdade] = useState(28)

    return (
        <Card>
            <h1>Perfil</h1>

            <Perfil nome={nome} idade={idade} />
        </Card>
    )
}

export default Ex015;