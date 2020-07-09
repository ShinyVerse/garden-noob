import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPaths, getPlantData } from "../../lib/plants";
import styles from "./[id].module.css";

export async function getStaticPaths() {
  const paths = getAllPaths();
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
  return (
    <Layout>
      <Head>
        <title>{plantData.id}</title>
      </Head>
      <h1 className="fonttype1">{plantData.name}</h1>
      <img
        className={styles.featureImg}
        src={`/${plantData.id}.jpg`}
        alt={plantData.name}
      />
      {plantData.tips && (
        <div>
          {plantData.tips && (
            <div className={styles.outerContainer}>
              <h2 className="fonttype1-sub">Quick tips</h2>
              {plantData.tips.map((tip) => (
                <div className={styles.container} key={tip.id}>
                  {tip.image && (
                    <img className={styles.subImg} src={`/${tip.id}.jpg`} />
                  )}
                  <p className={`paragraphText ${styles.subParagraph}`}>
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {plantData.issues && (
            <div className={styles.outerContainer}>
              <h2 className="fonttype1-sub">Potential issues</h2>
              {plantData.issues &&
                plantData.issues.map((issue) => (
                  <div className={styles.container} key={issue.id}>
                    {issue.image && (
                      <img className={styles.issue} src={`/${issue.id}.jpg`} />
                    )}
                    <p className={`paragraphText ${styles.subParagraph}`}>
                      {issue.content}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}
