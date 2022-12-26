import * as React from "react";
import { Link, PageProps } from "gatsby";

import { Tag } from "../tag";

import "./image.scss";

export const Image: React.FC<React.PropsWithChildren<{ tags?: string[] }>> = ({
  children,
  tags,
}) => {
  return (
    <figure className="image">
      <figcaption className="image__tags">
        {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </figcaption>
    </figure>
  );
};
