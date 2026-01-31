function Mensagem({tipo}) {
    return (
        <div>
            {tipo === "sucesso" && <p>Deu tudo certo</p>}
            {tipo === "erro" && <p>Algo deu errado</p>}
        </div>
    )
}

export default Mensagem;