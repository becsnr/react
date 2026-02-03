// 🎯 Objetivo
// Criar um Card que: recebe titulo, usa children, estiliza tudo
// 🧠 Regras
// Card deve renderizar: um título, tudo que vier dentro (children); Usar propTypes

import PropTypes from "prop-types"

function Card({titulo, children}) {
    return (
        <>
            <h1>{titulo}</h1>
            {children}
        </>
        
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node

}

export default Card