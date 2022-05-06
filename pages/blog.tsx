import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/posts";

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      Blog
    </Layout>
  );
}