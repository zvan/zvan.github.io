import * as React from "react";
import { Link } from "gatsby";

import "./tag.scss";

export const Tag: React.FC<React.PropsWithChildren<{ to?: string }>> = ({
  children,
}) => {
  return (
    <Link to="/" className="tag">
      {children}
    </Link>
  );
};
