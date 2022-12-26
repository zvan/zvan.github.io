import * as React from "react";
import { Link } from "gatsby";

import "./grid.scss";

interface GridProps {}

export const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  children,
}) => {
  return <div className="grid">{children}</div>;
};
