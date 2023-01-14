import * as React from "react";

import "./container.scss";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="container">{children}</div>;
};
