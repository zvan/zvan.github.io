import { Link } from "gatsby";
import * as React from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { Grid } from "../grid";
import { Snippet } from "../snippet";

import "./search.scss";

interface SearchProps {
  index: Object;
  store: Object;
}

export const Search: React.FC<SearchProps> = ({ index, store }) => {
  const options = {
    encode: "advanced",
  };
  const [query, setQuery] = React.useState("");
  const results = useFlexSearch(query, index, store, options);

  const handleChange = (event) => {
    setQuery(event.target.value);
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
            >
              {node.ingredients && <p>{node.ingredients.join(", ")}</p>}
            </Snippet>
          ))}
        </Grid>
      </div>
    </aside>
  );
};
