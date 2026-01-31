import PropTypes from 'prop-types'

function Item({ marca="Faltou a marca", ano_lancamento=0}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired, // se quiser valor obrigatório usar .isRequired
    ano_lancamento: PropTypes.number
}

// JEITO ANTIGO
// Item.defaultProps = {
//     marca: 'Faltou a marca',
//     ano_lancamento: 0
// }

export default Item;