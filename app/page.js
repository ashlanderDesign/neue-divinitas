import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.svg" />
      </header>
      <main className={styles.content}>
        <section className={styles.sectionLeft}>
          <h2 className={styles.sectionTitle}>
            Adventure RPG сборка <br /> для Minecraft 1.19.4
          </h2>
          <div className={styles.mods}>
            <img src="/better_combat.png" />
            <img src="/immers_engineering.png" />
            <img src="/blue_skies.png" />
            <img src="/alex_mobs.png" />
            <img src="/arcanus.png" />
            <span>
              И еще <br /> 90+ модов
            </span>
          </div>
          <div className={styles.actions}>
            <a
              href="https://storage.yandexcloud.net/ashlander-storage/Neue%20Divinitas%200.4.zip"
              target="__blank"
              className={styles.button}
            >
              Загрузить
            </a>
            <a
              href="https://storage.yandexcloud.net/ashlander-storage/Neue%20Divinitas%200.4%20Server.zip"
              target="__blank"
              className={styles.buttonIcon}
            >
              <img src="server.svg" />
            </a>
          </div>
        </section>
        <img src="illager.svg" />
      </main>
      <footer className={styles.footer}>
        <img src="/trademark.svg" />
      </footer>
    </div>
  );
}
