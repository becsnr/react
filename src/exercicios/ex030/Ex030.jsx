import { useState } from "react";


function Ex030() {
    const [modoEscuro, setModoEscuro] = useState(false);

    return (
        <body style={{backgroundColor: modoEscuro ? 'black' : 'white'}}>
            <button onClick={() => setModoEscuro(!modoEscuro)}>{ modoEscuro ? "modo claro" : "modo escuro" }</button>
        </body>
    )
}

export default Ex030