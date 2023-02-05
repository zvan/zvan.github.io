import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Grid } from "../grid";
import { Snippet } from "../snippet";

import "./search.scss";

interface SearchItem {
  id: string;
  title: string;
  slug: string;
}

const normalizeCharacters = (s: string) => {
  return s.toLowerCase().replace("č", "c").replace("š", "s").replace("ž", "z");
};

export const Search: React.FC<SearchProps> = () => {
  const items: SearchItem[] = useStaticQuery(graphql`
    query SearchQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `).allMdx.nodes.map(
    ({
      id,
      frontmatter: { title, slug },
    }: {
      id: string;
      frontmatter: { title: string; slug: string };
    }) => {
      return {
        id,
        title,
        slug,
      };
    }
  );

  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState(items);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;

    const r = items.filter(({ title }) =>
      normalizeCharacters(title).includes(normalizeCharacters(q))
    );

    setQuery(q);
    setResults(r);
  };

  return (
    <aside className="search">
      <input
        type="text"
        className="search__input"
        value={query}
        onChange={handleChange}
      />
      <Link to={`/recepti/`}>Vsi recepti</Link>

      <div className="search__results">
        <Grid>
          {results.map((node) => (
            <Snippet
              key={node.id}
              to={`/recepti/${node.slug}`}
              title={node.title}
            ></Snippet>
          ))}
        </Grid>
      </div>
    </aside>
  );
};
