import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.banner}>
        <h1>Welcome to the Next 13 Blog</h1>
        <p>Explore exciting posts and discover new adventures!</p>
      </div>

      {/* <div className={styles.mainContent}>
        <div className={styles.post}>
          <h2>Getting Started with Cooking</h2>
          <p>In this post, we'll explore the basics of cooking...</p>
        </div>

        <div className={styles.post}>
          <h2>Hiking Adventures in the Mountains</h2>
          <p>Embarking on a journey through the picturesque mountains...</p>
        </div>

        <div className={styles.post}>
          <h2>Exploring Uncharted Waters</h2>
          <p>Setting sail on a boat into uncharted waters was a thrilling...</p>
        </div>
      </div> */}
    </div>
  );
}
