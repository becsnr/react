function Humor({onClick}) {
    return (
        <>
            <button type="button" onClick={() => onClick("Estou feliz")}>Feliz</button>
            <button type="button" onClick={() => onClick("Estou triste")}>Triste</button>
        </>
    )
}

export default Humor