import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Kuharica TBD</h1>

      <Link to={`/recepti/`}>recepti</Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
