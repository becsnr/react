function EditarNome({mudarNome}) {
    return (
        <>
            <input type="text" placeholder="Digite um nome" onChange={(e) => mudarNome(e.target.value)} />
        </>
    )
}

export default EditarNome