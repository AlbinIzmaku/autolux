import Image from "next/image";
import styles from "../styles/select.module.css";
import Slider from "./slider";

export default function Select({
  label,
  slider = false,
  content = false,
  date = false,
  time = false,
}) {
  return (
    <div className={styles["select-container"]}>
      <div className={styles["select-container__label-container"]}>
        <label>{label}</label>
        {slider && (
          <div className={styles["select-container__switch-container"]}>
            <Slider />
            <p>Round trip?</p>
          </div>
        )}
      </div>
      <div className={styles['select-container__select']}>
        <div className={styles['select-container__select-content']}>
          {content && (
            <>
              <Image src="location.svg" alt="Location" width={12} height={18} />
              <p className={slider ? styles.firstChild : ""}>{content}</p>
            </>
          )}
          {date && (
            <>
              <Image src="date.svg" alt="Date" width={12} height={12} />
              <p>{date}</p>
              <Image src="divider.svg" alt="Divider" width={1} height={30} />
              <Image src="time.svg" alt="Time" width={12} height={12} />
              <p>{time}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
