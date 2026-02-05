import PropTypes from "prop-types"

function Perfil({nome, idade}) {
    return (
        <>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
        </>
    )
}

Perfil.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number
}

export default Perfil