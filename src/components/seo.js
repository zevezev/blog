import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {pageTitle} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
