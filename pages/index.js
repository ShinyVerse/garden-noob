import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import { getNavItems, getSubNavItems } from "../lib/plants";

export function getStaticProps() {
  const navItems = getNavItems();
  const subNavItems = getSubNavItems();

  return {
    props: {
      navItems,
      subNavItems,
    },
  };
}

function Home({ navItems, subNavItems }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <NavBar navItems={navItems} subNavItems={subNavItems} />
        home page!
      </div>
    </Layout>
  );
}

export default Home;
