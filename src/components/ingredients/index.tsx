import * as React from "react";
import { Link } from "gatsby";

import "./ingredients.scss";

export const Ingredients: React.FC<
  React.PropsWithChildren<{ ingredients: string[] }>
> = ({ ingredients }) => {
  return (
    <section className="ingredients">
      <h2 className="ingredients__title">Sestavine</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
};
