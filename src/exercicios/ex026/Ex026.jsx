import { useState } from "react"
import Cor from "./Cor"
import Texto from "./Texto"

function Ex026() {
    const [cor, setCor] = useState('');

    return (
        <>
            <Cor onCor={setCor} />
            <Texto txtCor={cor} />
        </>
    )
}

export default Ex026