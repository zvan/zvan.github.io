import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import { Image, Layout, Search, Title } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Image></Image>
      <Title>Poišči kuharske skrivnosti</Title>

      <Search />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
