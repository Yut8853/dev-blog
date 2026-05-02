import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.blogHome}>
      <section className={styles.hero}>
        <p className={styles.heroLabel}>Creative Dev Blog</p>
        <h1 className={styles.heroTitle}>表現を探す、学ぶ、作る。</h1>
        <p className={styles.heroText}>
          アニメーションやインタラクションなど、
          フロントエンド表現のアイデアと実装を共有する
          クリエイティブ開発のブログです。
        </p>
      </section>
    </main>
  );
}