import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/index.module.css";

function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h1 className="fonttype1">Welcome Garden Noob!</h1>
        <img
          className={styles.homeImg}
          src="/gardenNoob.png"
          alt="main image"
        />
        <h1 className="fonttype1">Get Growin'!</h1>
        <p className="paragraphText">
          So you've moved/moving from your city apartment and looking forward to
          getting some dirt under your nails. Here you'll find a few tips to get
          you started...before you've started :D
        </p>
      </div>
    </Layout>
  );
}

export default Home;
