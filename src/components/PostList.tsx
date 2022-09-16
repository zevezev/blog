import * as React from "react";
import { LinkText } from "./layout";

const PostList = ({ postData }: { postData: IPostData }) => {
  console.log(postData);
  return (
    <div>
      {postData?.allMdx?.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <LinkText to={`/art/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </LinkText>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          {node.excerpt}
        </article>
      ))}
    </div>
  );
};

export default PostList;

export interface IPostData {
  allMdx: {
    nodes: {
      excerpt: any;
      id: string;
      frontmatter: {
        title: string;
        date: string;
        slug: string;
      };
    }[];
  };
}
