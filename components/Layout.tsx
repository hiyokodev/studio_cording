import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "UALひよこクラブ 開発部";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.Header}>
        <Link href="/">
          <img src="/images/logo.png" className={styles.Header__Logo} />
        </Link>
        <div className={styles.Header__Menu}>
          <Link href="members">
            <a className={styles.Header__Menu__Item}>MEMBERS</a>
          </Link>
          <Link href="blog">
            <a className={styles.Header__Menu__Item}>BLOG</a>
          </Link>
          <Link href="contact">
            <a className={styles.Header__Menu__Item}>CONTACT</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
