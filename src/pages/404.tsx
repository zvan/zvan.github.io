import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Image, Layout, Title } from "../components";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Image></Image>
      <Title>These are not the cupcakes you were looking for</Title>

      <Link to={`/`}>Home</Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
