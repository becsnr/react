function Botao({onFeliz, onTriste, onRaiva}) {
    return (
        <>
            <button type="button" onClick={onFeliz}>Feliz</button>
            <button type="button" onClick={onTriste}>Triste</button>
            <button type="button" onClick={onRaiva}>Raiva</button>
        </>
    )
}

export default Botao