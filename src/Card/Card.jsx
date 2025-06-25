import spidey from "../assets/spidey.jpg"
import styles from "./Card.module.css"
function Card(params) {
  return(
    <>
      <div className={styles.card}>
        <img src={spidey} alt="Thumbnail" className={styles.cardimg} />
        <h2>Spider-man</h2>
        <p>With Great Power <br />Comes Great Responsibility</p>
      </div>
    </>
  );
}

export default Card