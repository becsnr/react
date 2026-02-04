import { useState } from "react";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Botao from "./components/Botao";

function Ex020() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    function receberDados(dados) {
        return
    }

    return (
        <Card>
            <Formulario />
        </Card>
    )
}

export default Ex020