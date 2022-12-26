import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data, children }) => {
  return (
    <main>
      <h1>{data.mdx.frontmatter.title}</h1>
      <span>{data.mdx.frontmatter.source}</span>
      <ul>
        {data.mdx.frontmatter.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <ul>
        {data.mdx.frontmatter.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      {children}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        ingredients
        tags
        source
      }
    }
  }
`;
