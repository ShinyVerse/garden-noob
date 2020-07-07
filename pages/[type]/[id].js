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
      plantData: plantData[0],
    },
  };
}
export default function PlantItem({ plantData }) {
  console.log("data", plantData.tips);

  return (
    <Layout>
      <Head>
        <title>{plantData.id}</title>
      </Head>
      <p>{plantData.name}</p>
      <img
        style={{ width: "500px", height: "500px", borderRadius: "10px" }}
        src={`/${plantData.id}.jpg`}
        alt={plantData.name}
      />
      {plantData.tips && (
        <div>
          <h1>Quick tips</h1>
          {plantData.tips.map((tip) => (
            <div>
              {tip.image && (
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                  src={`/${tip.id}.jpg`}
                />
              )}
              <p>{tip.content}</p>
            </div>
          ))}
          {plantData.issues && <h1>Potential issues</h1>}
          {plantData.issues &&
            plantData.issues.map((issue) => (
              <div>
                {issue.image && (
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                    src={`/${issue.id}.jpg`}
                  />
                )}
                <p>{issue.content}</p>
              </div>
            ))}
        </div>
      )}
    </Layout>
  );
}
