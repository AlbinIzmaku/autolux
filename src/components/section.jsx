import Image from "next/image";
import car from "/public/car.svg";
import styles from "../styles/section.module.css";

export default function Section() {
  return (
    <section className={styles.section}>
      <Image src={car} alt="Car" width={676} height={530} priority />
    </section>
  );
}
