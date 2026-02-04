function Botao({ texto, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {texto}
    </button>
  )
}

export default Botao