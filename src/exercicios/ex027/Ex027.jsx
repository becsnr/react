import { useState } from "react";
import Texto from "./Texto";

function Ex027() {
    const [txt, setTxt] = useState('');

    return (
        <>
            <p>{txt}</p>

            {/* PAI MANDA PRO FILHO */}
            <Texto valor={txt} mudar={setTxt} />
            <p><button onClick={() => setTxt('')}>Limpar</button></p>
        </>
    )
}

export default Ex027