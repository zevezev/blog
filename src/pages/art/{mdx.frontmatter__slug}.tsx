import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;
interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        hero_image: { childImageSharp: { gatsbyImageData: any } };
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
      };
    };
  };
  children: React.ReactNode;
}
const BlogPost: React.FC<Props> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="Super Cool Blog Posts" />;

export default BlogPost;
