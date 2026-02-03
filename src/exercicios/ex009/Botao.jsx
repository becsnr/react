// 🎯 Objetivo
// Criar um Botao que: recebe texto por props, dispara um evento ao clicar, usa propTypes
// 🧠 Regras
// Botao recebe: texto (string, obrigatório); onClick (função);
// No App, ao clicar: mostrar um alert("Clicou")

import PropTypes from "prop-types";

function Botao({texto, onClick}) {
    return (
        <button type="button" onClick={onClick}>{texto}</button>
    )
}

Botao.propTypes = {
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Botao;