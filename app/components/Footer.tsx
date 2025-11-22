import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Dibuat oleh 535240082 _ James William Wijaya
    </footer>
  );
}
