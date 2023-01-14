import * as React from "react";

import "./author.scss";

export const Author: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="author">{children}</div>;
};
