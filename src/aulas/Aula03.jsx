import SayMyName from "../components/SayMyName";
import Pessoa from "../components/Pessoa";

function Aula03 () {
    const nome = 'Ambar'

    return (
        <div>
            <h1>Props</h1>
            <h2>Informações que um componente recebe de outro.</h2>
            {/* EXEMPLO: */}
            <SayMyName nome="Violetta" />
            <SayMyName nome="Luna" />
            <SayMyName nome={nome} />

            <Pessoa nome="Simon" idade="20" profissao="Cantor" foto="https://picsum.photos/150" />
        </div>
    )
}

export default Aula03