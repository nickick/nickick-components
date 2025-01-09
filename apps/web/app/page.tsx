import { Carousel } from "@nickick/components/slider-picker";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Carousel>
            <p className="h-24 w-24 bg-red-500">1</p>
            <div>2</div>
            <div>3</div>
          </Carousel>
        </div>
      </main>
    </div>
  );
}
