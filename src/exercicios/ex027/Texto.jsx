function Texto({valor, mudar}) {
    return (
        <input type="text" name="txt" id="txt" placeholder="Digite algo..." value={valor} onChange={(e) => mudar(e.target.value)} />
    )
}

export default Texto