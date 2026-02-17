import { useState } from "react"
import SeuNome from "../components/SeuNome"
import Saudacao from "../components/Saudacao";

function Ex012() {
    const [nome, setNome] = useState();

    return (
        <>
            <h1>State Lift</h1>
            <SeuNome setNome={setNome} />
            <Saudacao nome={nome} />
        </>
    )
}

export default Ex012