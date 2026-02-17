import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { AiFillAndroid } from "react-icons/ai";
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.socialList}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><AiFillAndroid /></li>
            </ul>
            <p>Nosso Rodapé</p>
        </footer>
    )
}

export default Footer