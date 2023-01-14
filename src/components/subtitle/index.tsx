import * as React from "react";

import "./subTitle.scss";

export const SubTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className="subTitle">{children}</span>;
};
