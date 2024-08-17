import { useParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City Name</h6>
        <h3>
          <span>ES</span>Spain
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to city on</h6>
        <p>date</p>
      </div>
      <div className={styles.row}>
        <h6>Your Notes</h6>
        <p>Notes</p>
      </div>

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href="" target="_blank" rel="noreferrer">
          Check out city on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <button>&larr; Back</button>
      </div>
    </div>
  );
}

export default City;
