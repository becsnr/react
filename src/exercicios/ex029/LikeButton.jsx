import styles from "./LikeButton.module.css"

function LikeButton({onCurtir}) {
    return (
        <>
            <button className={styles.btn} onClick={onCurtir}>
                <div className={styles.heart}></div>
            </button>
        </>
    )
}

export default LikeButton