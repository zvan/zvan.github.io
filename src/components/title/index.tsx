import * as React from "react";

import { SubTitle, Container } from "../../components";

import "./title.scss";

interface TitleProps extends React.PropsWithChildren {
  subtitle: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  return (
    <div className="title">
      <Container>
        <h1 className="title__main">{children}</h1>
        <SubTitle>{subtitle}</SubTitle>
      </Container>
    </div>
  );
};
