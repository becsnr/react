function Mensagem({ enviar }) {
    function texto(e) {
        enviar(e.target.value);
    }
    return (
        <>
            <input type="text" onChange={texto} />
        </>
    )
}

export default Mensagem;