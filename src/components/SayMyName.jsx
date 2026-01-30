// FORMA ANTIGA
// function SayMyName(props) {
//     return (
//         <div>
//             <p>Fala aí {props.nome}, suave?</p>
//         </div>
//     )
// }

// FORMA MODERNA
function SayMyName({nome}) {
    return (
        <p>Fala aí {nome}, suave?</p>
    )
}

export default SayMyName;