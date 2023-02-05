import * as React from "react";
import { Link } from "gatsby";

import "./ingredients.scss";
import { Container } from "../container";

export const Ingredients: React.FC<
  React.PropsWithChildren<{ ingredients: string[] }>
> = ({ ingredients }) => {
  return (
    <section className="ingredients">
      <Container border>
        <h2 className="ingredients__title">Sestavine</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
