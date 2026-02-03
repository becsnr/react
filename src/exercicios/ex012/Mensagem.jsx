// 🎯 Objetivo: Juntar props + estado + evento
// 🧠 Regras
// Mensagem recebe tipo ("sucesso" | "erro")
// Usa propTypes
// Exibe texto diferente para cada tipo
// No App: botão “Sucesso”, botão “Erro”, estado controla qual mensagem aparece

import PropTypes from "prop-types";

function Mensagem({tipo}) {
    return (
        <>
            {tipo === "sucesso" && "Deu tudo certo"}
            {tipo === "erro" && "Algo deu errado"}
        </>
    )
}

Mensagem.propTypes = {
    tipo: PropTypes.oneOf(["sucesso", "erro"])
}

export default Mensagem