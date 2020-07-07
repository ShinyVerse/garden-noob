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
        <h1>Welcome Garden Noob!</h1>
        <img src="/gardenNoob.png" alt="main image" />
        <h1>Get Growin'!</h1>
        <p>
          So you've moved/moving from your city apartment and looking forward to
          getting some dirt under your nails. Here you'll find a few tips to get
          you started...before you've started :D
        </p>
      </div>
    </Layout>
  );
}

export default Home;
