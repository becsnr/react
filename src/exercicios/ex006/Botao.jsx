function Botao() {
    function clicar() {
        alert("Clicou")
    }

    return (
        <>
            <button type="button" onClick={clicar}>Clique aqui</button>
        </>
    )
}

export default Botao;