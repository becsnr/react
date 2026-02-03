import Botao from "./Botao";

function Ex009() {
    function clicar() {
        alert('Clicou')
    }

    return (
        <>
            <Botao texto={'Cliqueee'} onClick={clicar} />
        </>
    )
}

export default Ex009 