function Aula01() {
  const name = 'Violetta';

  function sum(a, b) {
    return a + b
  }

  const url = 'https://picsum.photos/150'

  return (
    <div className='App'>
      <h1>Olá, Mundo!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {name}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(4, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  )
}

export default Aula01;