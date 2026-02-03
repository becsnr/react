function Mouse() {
    function entrar() {
        console.log("Mouse entrou")
    }

    function sair() {
        console.log("Mouse saiu")
    }

    return (
        <div 
            onMouseEnter={entrar}
            onMouseLeave={sair}
            style={{width: 200, height: 200, background: "plum"}}
        />
    )
}

export default Mouse;