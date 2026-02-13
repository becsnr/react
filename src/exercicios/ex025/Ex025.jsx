import { useState } from "react"
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"

function Ex025() {
    const [estado, setEstado] = useState(false);

    return (
        <>
            <h2>Filho A → Pai → Filho B</h2>

            <FilhoA onAbrir={setEstado} />
            <FilhoB caixa={estado} />
        </>
    )
}

export default Ex025