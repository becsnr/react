function Cor({onCor}) {
    return (
        <>
            <button onClick={() => onCor("red")}>Vermelho</button>

            <button onClick={() => onCor("blue")}>Azul</button>

            <button onClick={() => onCor("green")}>Verde</button>
        </>
    )
}

export default Cor