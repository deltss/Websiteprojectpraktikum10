"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Praktikum 10
        </Link>

        <ul className={styles.links}>
          <li className={isActive("/jobs")}>
            <Link href="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}