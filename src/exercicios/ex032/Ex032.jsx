function Ex032() {
    const filmes = [
        {id: 1, titulo: 'Miss Simpatia', assistido: true},
        {id: 2, titulo: 'Shazam', assistido: false},
        {id: 3, titulo: 'Meninas Malvadas', assistido: true},
        {id: 4, titulo: 'Telefone Preto', assistido: false},
        {id: 5, titulo: 'Maze Runner', assistido: true},
        {id: 6, titulo: 'Velozes e Furiosos', assistido: false}
    ]
    return (
        <>
            <h1>Filmes assistidos</h1>
            {filmes
                .filter(filme => filme.assistido)
                .map((filme) => (
                <p key={filme.id}>
                    {filme.titulo}
                </p>
            ))}
        </>
    )
}

export default Ex032