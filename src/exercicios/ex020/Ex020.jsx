import { useState } from "react";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";

function Ex020() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    function receberDados(nomeDigitado, idadeDigitado) {
        setNome(nomeDigitado)
        setIdade(idadeDigitado)
    }

    return (
        <Card>
            <Formulario enviarDados={receberDados} />
            <Perfil nome={nome} idade={idade} />
        </Card>
    )
}

export default Ex020