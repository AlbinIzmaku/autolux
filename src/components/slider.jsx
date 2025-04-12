import styles from "../styles/slider.module.css";

export default function Slider() {
  return (
    <label className={styles.label}>
      <input type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
}
