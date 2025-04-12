import Header from "@/components/header";
import styles from "./page.module.css";
import Aside from "@/components/aside";
import Section from "@/components/section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Header />

      <div className={styles.div}>
        <Aside />
        <Section />
      </div>
      <Footer />
    </main>
  );
}
