import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import PostList from "../components/PostList";
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "art" } }) {
      nodes {
        name
      }
    }
  }
`;
interface IData {
  data: {
    allFile: {
      nodes: {
        name: string;
      }[];
    };
  };
}
const Art: React.FC<IData> = ({ data }) => {
  const postData = data?.allFile?.nodes || [];
  return (
    <Layout pageTitle="Art">
      <PostList postData={postData} />
    </Layout>
  );
};
export default Art;
