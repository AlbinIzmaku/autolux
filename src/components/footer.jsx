import Image from "next/image";
import Slider from "./slider";
import styles from "../styles/footer.module.css";
import Select from "./select";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Select
          label="Departaure"
          slider={true}
          content="City, airport or st |"
        />
        <Select label="Return location:" content="City, airport or st |" />
        <Select
          label="Pickup date & time:"
          date="10 Jan 2025"
          time="10:35 AM"
        />
        <Select label="Return date & time" date="15 Jan 2025" time="07:35 AM" />

        <Image src="search.svg" alt="Search" width={55} height={55} />
      </div>
    </footer>
  );
}
