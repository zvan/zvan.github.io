import * as React from "react";
import { Link } from "gatsby";

import "./title.scss";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};
