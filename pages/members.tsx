import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/members.module.css";
import { getMembersData } from "../lib/members";
import { EntryCollection } from "contentful";
import { buildClient } from "../lib/contentful";
import { IMemberFields } from "../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { NextPage, InferGetStaticPropsType } from "next";

// SSG
export async function getStaticProps() {
  // Contentfulからメンバーデータを取得
  // nameJpn, name, id, description, image
  const client = buildClient();
  const response: EntryCollection<IMemberFields> = await client.getEntries({
    content_type: "member",
  });

  // idでソート
  let allMembersData = response.items.sort(function (a, b) {
    return a.fields.id < b.fields.id ? -1 : 1;
  });

  return {
    props: {
      allMembersData,
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Members: NextPage<Props> = ({ allMembersData }) => {
  // 環境によってパスを分ける
  const dir = process.env.DIR;

  return (
    <Layout>
      <Head>
        <title>Members</title>
      </Head>
      <section className={styles.Profiles}>
        {allMembersData.map((membersData) => (
          <div key={membersData.fields.id} className={styles.Profile}>
            <div className={styles.Profile__Left}>
              <img src={dir + membersData.fields.image.fields.file.url} />
            </div>
            <div className={styles.Profile__Right}>
              <p className={styles.Profile__Right__Name} id="1">
                {membersData.fields.nameJpn}{" "}
                <span className={styles.Profile__Right__Name__Year}>
                  {String(membersData.fields.id).substring(0, 4)}入社
                </span>
              </p>
              <p className={styles.Profile__Right__Sentence}>
                {documentToReactComponents(membersData.fields.description)}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Members;
