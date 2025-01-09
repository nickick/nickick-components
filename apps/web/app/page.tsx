import { Carousel } from "@repo/slider-picker";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Carousel>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Carousel>
      </main>
    </div>
  );
}
