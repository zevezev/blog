import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }: { data: IData }) => {
  const nodes = data.allFile.nodes;
  return (
    <Layout pageTitle="My Blog Posts">
      {nodes?.map((node: { name: string }) => (
        <p>{node.name}</p>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="My Blog Posts" />;

export default BlogPage;

interface IData {
  allFile: { nodes: [{ name: string }] };
}
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
