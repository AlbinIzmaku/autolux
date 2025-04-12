import Link from "next/link";
import styles from "../styles/customLink.module.css";

export default function CustomLink({ children }) {
  return (
    <Link
      href="/"
      className={children !== "Contact" ? styles.a : styles.primary}
    >
      {children}
    </Link>
  );
}
