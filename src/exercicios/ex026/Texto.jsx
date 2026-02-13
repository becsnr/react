function Texto({txtCor}) {
    const pStyle = {
        color: 'white',
        backgroundColor: txtCor
    }
    return (
        <>
            {txtCor && <p style={pStyle}>texto colorido</p>}
        </>
    )
}

export default Texto