import styles from "./page.module.css";
import CarouselSlider from "./CarouselSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CarouselSlider />
      </main>
    </div>
  );
}
