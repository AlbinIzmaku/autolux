import styles from "../styles/aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__content}>
        <h1 className={styles.aside__h1}>ADVENTURE STARTS RIGHT NOW, RIGHT HERE</h1>
        <p className={styles.aside__p}>
          Skip the hassle and drive on your terms. Our rental service offers
          reliable cars, transparent pricing, and quick booking for every
          destination.
        </p>
      </div>
      <div>
        <button className={styles.button}>Learn more</button>
      </div>
    </aside>
  );
}
