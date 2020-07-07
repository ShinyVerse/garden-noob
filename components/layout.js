import Head from "next/head";
// import styles from "./layout.module.css";
import constantStyles from "../styles/constants.module.css";
import Link from "next/link";

export const siteTitle = "Garden Noob";

export default function Layout({ children, home }) {
  return (
    // className={constantStyles.container}
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quick tips for new gardeners." />
        <meta name="" content={siteTitle} />
      </Head>

      <main>{children}</main>
    </div>
  );
}
