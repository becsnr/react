import Button from "./Button";

function Evento({numero}) {
    function meuEvento() {
        console.log(`Opa, fui ativado! ${numero}`)
    }
    
    function segundoEvento() {
        console.log("Ativando segundo evento!")
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </>
    )
}

export default Evento;