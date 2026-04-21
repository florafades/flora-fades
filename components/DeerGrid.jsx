'use client';
import { useEffect, useState } from 'react';
import styles from './DeerGrid.module.css';

export default function DeerGrid() {
  const [srcs, setSrcs] = useState([]);

  useEffect(() => {
    fetch('/api/deer')
      .then(res => res.json())
      .then(setSrcs);
  }, []);

  return (
    <div className={styles.grid}>
      {srcs.map((src, index) => (
        <div key={index} className={styles.item}>
          <img src={src} className={styles.image} />
        </div>
      ))}
    </div>
  );
}