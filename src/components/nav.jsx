import CustomLink from "./customLink";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <CustomLink>Home</CustomLink>
        <CustomLink>About</CustomLink>
        <CustomLink>Our Cars</CustomLink>
      </div>
      <div>
        <CustomLink>Contact</CustomLink>
      </div>
    </nav>
  );
}
