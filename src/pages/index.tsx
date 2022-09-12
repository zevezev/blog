import * as React from "react";
import { HeadFC, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Art Explosion Open House">
        <StaticImage
          alt="Dream Beasts, painting by Zev"
          src="../images/ArtExplosionOpenStudio/dreamBeasts.jpeg"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
