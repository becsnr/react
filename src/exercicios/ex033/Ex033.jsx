function Ex033() {
    const livros = [
        {id: 1, titulo: 'Assistente do Vilão', preco: "R$ 36,45", emEstoque: false},
        {id: 2, titulo: 'Estilhaça-me', preco: "R$ 43,13", emEstoque: true},
        {id: 3, titulo: 'A Lâmina mais Cortante', preco: "R$ 37,59", emEstoque: true},
        {id: 4, titulo: 'Jantar Secreto', preco: "R$ 36,17", emEstoque: false},
        {id: 5, titulo: 'A Paciente Silenciosa', preco: "R$ 39,80", emEstoque: true},
        {id: 6, titulo: 'Divergente', preco: "R$ 65,90", emEstoque: false}
    ]
    return (
        <>
            <h1>Livros</h1>
            {livros.length > 0 ?
            (livros.map((livro) => (
                <p key={livro.id}>
                    <h3>{livro.titulo}</h3>
                    <p>{livro.preco}</p>
                    {livro.emEstoque ? <button>Comprar</button> : "Produto esgotado"}
                </p>
                
            ))) : (
                <p>Carrinho vazio</p>
            )}
        </>
    )
}

export default Ex033