import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { Grid, Image, Layout, Title } from "../../components";
import { Snippet } from "../../components";

interface RecipeData {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        slug: string;
        ingredients: string[];
      };
      id: string;
    }[];
  };
}

const Recipes: React.FC<PageProps<RecipeData>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <Image></Image>
      <Title>Recepti</Title>

      <Grid>
        {nodes.map((node) => (
          <Snippet
            key={node.id}
            to={`/recepti/${node.frontmatter.slug}`}
            title={node.frontmatter.title}
          >
            <p>{node.frontmatter.ingredients.join(", ")}</p>
          </Snippet>
        ))}
      </Grid>
    </Layout>
  );
};

export default Recipes;

export const Head: HeadFC<RecipeData> = () => <title>Recepti</title>;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          ingredients
        }
        id
      }
    }
  }
`;
