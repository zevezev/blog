// Step 1: Import React
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <h1>Howdy</h1>
        <p>
          I'm Zev, writer, artist, and programmer based in San Francisco. These
          are my unfiltered artpinons about art things going on in this city.
        </p>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export const Head = () => <title>About</title>;
export default AboutPage;
