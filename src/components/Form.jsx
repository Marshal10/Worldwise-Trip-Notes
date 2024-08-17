import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import DatePicker from "react-datepicker";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input type="text" id="cityName"></input>
        <span className={styles.flag}>Emoji</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to city?</label>
        <DatePicker id="date" dateFormat="dd/MM/yyyy" />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to city</label>
        <textarea id="notes"></textarea>
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
