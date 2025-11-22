"use client";
import { useState } from "react";
import styles from "../styles/uploadbox.module.css";

export default function UploadBox() {
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: { target: { files: any[]; }; }) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <div className={styles.box}>
      <label className={styles.label}>Pilih File:</label>
      <input
        type="file"
        className={styles.input}
        onChange={handleFileChange}
      />

      {fileName && (
        <p className={styles.filename}>File dipilih: {fileName}</p>
      )}
    </div>
  );
}
