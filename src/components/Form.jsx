import { useState } from "react";
import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import DatePicker from "react-datepicker";

function Form() {
  const [cityName, setCityname] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityname(e.target.value)}
        ></input>
        <span className={styles.flag}>Emoji</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to city?</label>
        <DatePicker
          id="date"
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to city</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
