import * as React from "react";
import { Link } from "gatsby";

import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__name">
        <div className="header__logo"></div>
        <span className="header__title">Domače skrivnosti</span>
      </Link>
    </header>
  );
};
