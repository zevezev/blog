import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PostList, { IPostData } from "../../components/PostList";
import Seo from "../../components/seo";
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
interface IData {
  data: IPostData;
}
const Art: React.FC<IData> = ({ data }) => {
  return (
    <Layout pageTitle="Art">
      <PostList postData={data} />
    </Layout>
  );
};
export const Head = () => <Seo pageTitle="Art" />;

export default Art;
