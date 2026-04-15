import { artData as art_data } from '../utils/index.js';
import styles from './ArtGrid.module.css';

export default function ArtGrid() {
  const artworks = Object.values(art_data);

  return (
    <div className={styles.grid}>
      {artworks.map((artwork, index) => (
        <div key={index} className={styles.item}>
          <img
            src={artwork.img}
            alt={artwork.title}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}