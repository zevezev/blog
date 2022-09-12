// Step 1: Import React
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo.js";

const PicHolder = styled.div`
  display: flex;

  height: 22rem;
`;
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <p>
          I'm Zev, writer, artist, and programmer based in San Francisco. These
          are my unfiltered artpinons about art things going on in this city.
        </p>
        <PicHolder>
          <StaticImage
            objectFit="scale-down"
            alt="Dream Beasts, painting by Zev"
            src="../images/Profile.jpg"
          />
        </PicHolder>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export const Head = () => <Seo pageTitle="About" />;
export default AboutPage;
