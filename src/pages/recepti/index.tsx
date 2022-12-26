import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <h1>recepti</h1>

      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/recepti/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
        </article>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>recepti Page</title>;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
  }
`;
