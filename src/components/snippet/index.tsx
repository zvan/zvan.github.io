import * as React from "react";
import { Link } from "gatsby";

import "./snippet.scss";

interface SnippetProps {
  to: string;
  title: string;
}

export const Snippet: React.FC<React.PropsWithChildren<SnippetProps>> = ({
  to,
  title,
  children,
}) => {
  return (
    <Link to={to} className="snippet">
      <article>
        <h2 className="snippet__title">{title}</h2>
        {children}
      </article>
    </Link>
  );
};
