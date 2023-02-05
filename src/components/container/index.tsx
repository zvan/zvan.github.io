import * as React from "react";
import classNames from "classnames";

import "./container.scss";

interface ContainerProps extends React.PropsWithChildren {
  border: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  border = false,
}) => {
  return (
    <div className={classNames("container", { "container--border": border })}>
      {children}
    </div>
  );
};
