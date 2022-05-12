import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/members.module.css";
import { getMembersData } from "../lib/members";

// SSG
export async function getStaticProps() {
  const allMembersData: MembersData[] = getMembersData(); // id, name, name_jpn, year, joinNumber, image, description

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
        {allMembersData.map(
          ({ id, name, name_jpn, year, joinNumber, image, description }) => (
            <div key={id} className={styles.Profile}>
              <div className={styles.Profile__Left}>
                <img src={dir + image} />
              </div>
              <div className={styles.Profile__Right}>
                <p className={styles.Profile__Right__Name} id="1">
                  {name_jpn}{" "}
                  <span className={styles.Profile__Right__Name__Year}>
                    {year}入社
                  </span>
                </p>
                <p className={styles.Profile__Right__Sentence}>{description}</p>
              </div>
            </div>
          )
        )}
      </section>
    </Layout>
  );
}
