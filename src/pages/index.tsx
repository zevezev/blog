import * as React from "react";
import { HeadFC, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../components/theme";
import GlobalStyle from "../components/globalStyles";
const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Layout pageTitle="Art Explosion Open House">
          <StaticImage
            alt="Dream Beasts, painting by Zev"
            src="../images/ArtExplosionOpenStudio/dreamBeasts.jpeg"
          />
        </Layout>
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
