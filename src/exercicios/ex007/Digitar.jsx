function Digitar() {
    function show(e) {
        console.log(e.target.value)
    }

    return (
        <input type="text" onChange={show} placeholder="Digite algo" />
    )
}

export default Digitar;