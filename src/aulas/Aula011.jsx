import Lista from "../components/Lista";

function Aula011() {
    const meusItens = ['React', 'Vue', 'Angular'];

    return (
        <>
            <h1>Renderização de Listas</h1>
            <Lista itens={meusItens} />
        </>
    )
}

export default Aula011