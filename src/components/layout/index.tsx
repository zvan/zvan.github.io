import * as React from "react";

import { Header } from "../header";
import { Footer } from "../footer";

import "./layout.scss";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="layout">
      <div className="layout__header">
        <Header />
      </div>

      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </main>
  );
};
