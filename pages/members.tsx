import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/members.module.css";
import { getMembersData } from "../lib/members";

// SSG
export async function getStaticProps() {
  const allMembersData = getMembersData(); // id, name, year, image, description

  return {
    props: {
      allMembersData,
    },
  };
}

export default function Members({ allMembersData }) {
  // 環境によってパスを分ける
  const dir = process.env.DIR;

  return (
    <Layout>
      <Head>
        <title>Members</title>
      </Head>
      <section className={styles.Profiles}>
        {allMembersData.map(({ id, name, year, image, description }) => (
          <div key={id} className={styles.Profile}>
            <div className={styles.Profile__Image}>
              <img src={dir + image} />
            </div>
            <div className={styles.Profile__Sentence}>
              <p className={styles.Name} id="1">
                {name} {year}
              </p>
              <p className={styles.Sentence}>{description}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
