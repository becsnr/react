function LikeMessage({likemsg}) {
    let msg = '';
    if (likemsg === 0) {
        msg = "Seja o primeiro!";
    } else if (likemsg <= 5) {
        msg = "Tá crescendo 😎"
    } else {
         msg = "Tá ficando popular 🫣"
    }

    return (
        <>
            <p>{msg}</p>
        </>
    )
}

export default LikeMessage