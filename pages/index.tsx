import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/home.module.css";
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
      <section className={styles.Top}>
        <img src="/images/top.png" className={styles.Top__Image} />
      </section>

      <section className={styles.About}>
        <div className={styles.About__Inner}>
          <h2 className={styles.About__Title}>ひよこ開発とは</h2>
          <div className={styles.About__Contents}>
            <div className={styles.About__Contents__Text}>
              <p>
                アプリ開発や業務効率化、資格取得といったテーマを中心に、
                <br />{" "}
                自分たちが主体となって、勉強や制作活動を楽しみながら自由に行うグループです。
              </p>
              <p>
                メンバーは若手のみなので、上下関係を気にせず質問をぶつけたり、
                <br />{" "}
                仕事でのコミュニケーションに重要な”ヨコのつながり”を作ることもできます。
              </p>
            </div>
            <img
              src="/studio_cording/images/hiyoko.webp"
              className={styles.About__Content__Image}
            />
          </div>
          <a className={styles.About__Button} href="#">
            動画で見る！
          </a>
        </div>
      </section>

      <section className={styles.Solution}>
        <div className={styles.Solution__Inner}>
          <h2 className={styles.Solution__Title}>そのお悩み解決できます</h2>
          <div className={styles.Solution__Contents}>
            <div className={styles.Solution__Contents__Card}>
              <div className={styles.Solution__Contents__Card__Problem}>
                <img
                  src="/studio_cording/public/images/tornado-1.svg"
                  className={styles.Solution__Icon}
                />
                <p>勉強のモチベーションが続かない</p>
              </div>
              <div className={styles.Solution__Contents__Card__Answer}>
                <img
                  src="/images/icon-idea03.png"
                  className={styles.Solution__Icon}
                />
                <p>
                  ひよこ開発はチームで活動しているので、作業をお願いされたり、
                  みんなで成果を見せあったり、相互に刺激を貰ってやる気を出せる環境であり、
                  きっかけ作りに最適です。
                </p>
              </div>
            </div>
            <div className={styles.Solution__Contents__Card}>
              <div className={styles.Solution__Contents__Card__Problem}>
                <img
                  src="/images/tornado-1.svg"
                  className={styles.Solution__Icon}
                />
                <p>わからないところで挫折してしまう</p>
              </div>
              <div className={styles.Solution__Contents__Card__Answer}>
                <img
                  src="/images/icon-idea03.png"
                  className={styles.Solution__Icon}
                />
                <p>
                  やる気が無くなる大きな原因である『わからない』も
                  勉強会で詳しい人に教えてもらったり、
                  Slackで質問したりして解決できます。
                </p>
              </div>
            </div>
            <div className={styles.Solution__Contents__Card}>
              <div className={styles.Solution__Contents__Card__Problem}>
                <img
                  src="/images/tornado-1.svg"
                  className={styles.Solution__Icon}
                />
                <p>コミュニティが広がらない</p>
              </div>
              <div className={styles.Solution__Contents__Card__Answer}>
                <img
                  src="/images/icon-idea03.png"
                  className={styles.Solution__Icon}
                />
                <p>
                  定期的にオンラインやオフラインで交流会を企画していて、
                  いろいろな部署の先輩と関われる機会があります。
                  定例会やチャットツールなどもあるので、
                  気軽にコミュニケーションを取ることができます。
                </p>
              </div>
            </div>
            <div className={styles.Solution__Contents__Card}>
              <div className={styles.Solution__Contents__Card__Problem}>
                <img
                  src="/images/tornado-1.svg"
                  className={styles.Solution__Icon}
                />
                <p>勉強の進め方がわからない</p>
              </div>
              <div className={styles.Solution__Contents__Card__Answer}>
                <img
                  src="/images/icon-idea03.png"
                  className={styles.Solution__Icon}
                />
                <p>
                  やりたいことがあっても、何から勉強すべきかわからないと思います。
                  ひよこ開発ではステップに沿ってやさしくサポートしてもらえるので、
                  効率的に学習を進めることができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Study}>
        <div className={styles.Study__Inner}>
          <h2 className={styles.Study__Title}>学習内容</h2>
          <div className={styles.Study__Contents}>
            <div className={styles.Study__Contents__Top}>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_1.webp"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>
                  Webサイト制作
                </p>
                <p className={styles.Study__Contents__Card__Description}>
                  HTML, CSS, JavaScript といった言語を
                  <br /> 勉強しながらWebサイトを作ります。
                </p>
              </div>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_2.webp"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>
                  自動化ツール作成
                </p>
                <p className={styles.Study__Contents__Card__Description}>
                  業務効率化のためにブラウザ操作の
                  <br /> 自動化ツールなども作成します。
                </p>
              </div>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_3.webp"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>
                  Webアプリ制作
                </p>
                <p className={styles.Study__Contents__Card__Description}>
                  チームで作業を分担して
                  <br /> Pyhtonでアプリを作成します。
                </p>
              </div>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_4.png"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>
                  NW機器の操作
                </p>
                <p className={styles.Study__Contents__Card__Description}>
                  Ciscoのネットワーク機器を保有しているため、
                  <br /> いつでも実機に触ることができます。
                </p>
              </div>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_5.webp"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>AWS</p>
                <p className={styles.Study__Contents__Card__Description}>
                  知っておきたいけど独学しにくい
                  <br /> クラウドにも触れられます。
                </p>
              </div>
              <div className={styles.Study__Contents__Card}>
                <img
                  src="/images/contents_6.webp"
                  className={styles.Study__Contents__Card__Image}
                />
                <p className={styles.Study__Contents__Card__Title}>資格学習</p>
                <p className={styles.Study__Contents__Card__Description}>
                  受験内容や結果の情報を共有したり、
                  <br /> 質問をしあいながら学習します。
                </p>
              </div>
            </div>
            <ul className={styles.Study__Contents__Bottom}>
              <li>参加者のほとんどがプログラミング経験０から始めています。</li>
              <li>
                複数の活動の中から、自分の好きなものを選択して取り組めます。
              </li>
              <li>分からないことはすぐに質問できる環境が整っています。</li>
              <li>
                個人だと手を出しにくい有料サービス(AWSなど)やネットワーク機器も使えます。
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.Format}>
        <div className={styles.Format__Inner}>
          <h2 className={styles.Format__Title}>活動形式</h2>
          <div className={styles.Format__Contents}>
            <div className={styles.Format__Contents__Top}>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>
                  オンライン定例会
                </p>
                <p className={styles.Format__sContents__Card__Description}>
                  月2回程度Zoomで
                  <br /> 各自の活動状況などを報告
                </p>
              </div>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>
                  チーム別活動
                </p>
                <p className={styles.Format__sContents__Card__Description}>
                  インフラ学習やアプリ開発など
                  <br /> 興味のあるチームに参加して活動を実施
                </p>
              </div>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>
                  ナレッジ共有
                </p>
                <p className={styles.Format__sContents__Card__Description}>
                  活動の内容や情報は
                  <br /> いつでも後から確認可能
                </p>
              </div>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>
                  いつでも質問OK
                </p>
                <p className={styles.Format__sContents__Card__Description}>
                  チャット形式のやりとりで
                  <br /> いつでもすぐに質問できる
                </p>
              </div>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>勉強会</p>
                <p className={styles.Format__sContents__Card__Description}>
                  定期的に勉強会を開催し
                  <br /> 集中できる環境をつくりだす
                </p>
              </div>
              <div className={styles.Format__Contents__Card}>
                <img
                  src="/images/format_1.webp"
                  className={styles.Format__Contents__Card__Image}
                />
                <p className={styles.Format__Contents__Card__Title}>交流会</p>
                <p className={styles.Format__sContents__Card__Description}>
                  オンライン オフライン問わず
                  <br /> ボードゲーム会などを企画
                </p>
              </div>
            </div>

            <div className={styles.Format__Contents__Bottom}>
              <a className={styles.Format__Button} href="#">
                活動風景（動画）
              </a>
              <a className={styles.Format__Button} href="#">
                活動ブログ
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
