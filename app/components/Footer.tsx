import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Praktikum Bab 10 — Dibuat dengan Next.js
    </footer>
  );
}
