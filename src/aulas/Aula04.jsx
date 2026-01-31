// import Frase from "../components/Frase";
import styles from "../components/Frase.module.css";

function Aula04() {
  return (
    <div className={styles.fraseContainer}>
      <h1 className={styles.frase_content}>CSS Module</h1>
      <p>Deixam o CSS local ao componente.</p>
      <p>Ou seja:</p>
      <ul>
        <li>o estilo do card só vale pro card</li>
        <li>não vaza para outros componentes</li>
      </ul>
    </div>
  );
}

export default Aula04;
