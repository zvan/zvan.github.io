import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { Image, Layout, Title } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Image></Image>
      <Title>Kuharica TBD</Title>
      <p>search here</p>
      <Link to={`/recepti/`}>recepti</Link>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
