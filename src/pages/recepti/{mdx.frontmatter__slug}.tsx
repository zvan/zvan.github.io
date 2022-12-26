import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout, Ingredients, Title, Image } from "../../components";

interface RecipeData {
  mdx: {
    frontmatter: {
      title: string;
      tags?: string[];
      ingredients?: string[];
      source?: string;
    };
  };
}

const Recipe: React.FC<PageProps<RecipeData>> = ({
  data: {
    mdx: {
      frontmatter: { title, tags, ingredients, source },
    },
  },
  children,
}) => {
  return (
    <Layout>
      {tags && <Image tags={tags}></Image>}
      <Title>{title}</Title>
      {ingredients && <Ingredients ingredients={ingredients}></Ingredients>}
      <span>{source}</span>

      {children}
    </Layout>
  );
};

export default Recipe;

export const Head: HeadFC<RecipeData> = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}) => <title>{title}</title>;

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
