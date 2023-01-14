import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import { Image, Layout, Search, Title } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query SearchQuery {
      localSearchRecipes {
        index
        store
      }
    }
  `);

  return (
    <Layout>
      <Image></Image>
      <Title>Poišči kuharske skrivnosti</Title>

      <Search
        index={data.localSearchRecipes.index}
        store={data.localSearchRecipes.store}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
