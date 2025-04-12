import Image from "next/image";
import logo from "/public/logo.svg";
import styles from "../styles/header.module.css";
import Nav from "./nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="Logo" width={141} height={52} />
      <Nav />
    </header>
  );
}
