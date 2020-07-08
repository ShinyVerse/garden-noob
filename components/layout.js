import Head from "next/head";
import { getNavItems, getSubNavItems } from "../lib/plants";
import styles from "./layout.module.css";
import constantStyles from "../styles/constants.module.css";
import Link from "next/link";
import NavBar from "./navbar";

export const siteTitle = "Garden Noob";

export default function Layout({ children, home }) {
  const navItems = getNavItems();
  const subNavItems = getSubNavItems();
  return (
    // className={constantStyles.container}
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quick tips for new gardeners." />
        <meta name="" content={siteTitle} />
      </Head>
      <NavBar navItems={navItems} subNavItems={subNavItems} />
      <main>{children}</main>
    </div>
  );
}
