import { useState } from "react"
import LikeButton from "./LikeButton"
import LikeCounter from "./LikeCounter";
import LikeMessage from "./LikeMessage";
import Reset from "./Reset";

function Ex029() {
    const url = 'https://picsum.photos/150'
    const [likes, setLikes] = useState(0);

    function curtidas() {
        setLikes(likes + 1);
    }

    function zerar() {
        setLikes(0);
    }

    return (
        <>
            <p><img src={url} alt="Post" /></p>
            <LikeButton onCurtir={curtidas} />
            <LikeCounter cont={likes} />
            <LikeMessage likemsg={likes} />
            <Reset resetar={zerar} />
        </>
    )
}

export default Ex029