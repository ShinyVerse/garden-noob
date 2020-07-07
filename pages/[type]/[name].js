import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPaths, getPlantData } from "../../lib/plants";

export async function getStaticPaths() {
  const paths = getAllPaths();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const plantData = getPlantData(params.id);

  return {
    props: {
      plantData,
    },
  };
}
export default function PlantItem({ plantData }) {
  console.log(plantData);

  return (
    <Layout>
      <Head>
        <title>{plantData.id}</title>
      </Head>
      <article>
        <p>{plantData.name}</p>
      </article>
    </Layout>
  );
}
