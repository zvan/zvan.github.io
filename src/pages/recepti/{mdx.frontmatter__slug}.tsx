import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import {
  Layout,
  Ingredients,
  Title,
  Image,
  Container,
  Author,
} from "../../components";

import "./detail.scss";

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
      <Image></Image>
      <Title
        subtitle={
          <>
            {tags?.join(" ")} (<Author>{source}</Author>) ☞ ?? min
          </>
        }
      >
        {title}
      </Title>
      {ingredients && <Ingredients ingredients={ingredients}></Ingredients>}
      <Container>{children}</Container>
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
