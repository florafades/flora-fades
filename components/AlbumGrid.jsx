'use client';
import { useEffect, useState } from 'react';
import styles from './AlbumGrid.module.css';

export default function AlbumGrid() {
  const [srcs, setSrcs] = useState([]);

  useEffect(() => {
    fetch('/api/albums')
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