import * as React from "react";

import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Hiša Žvan
    </footer>
  );
};
