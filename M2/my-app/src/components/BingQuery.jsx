// MyComponent.js

import React, { useState } from "react";
import search from "../apis/search.js";

function BingQuery() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const result = await search(query);
      setResults(result);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching search results."); // Set error state
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {error && <div>{error}</div>}

      {results && (
        <ul>
          {results.value.map((item) => (
            <li key={item["@search.score"]}>
              {item.company_name} - {item.insurance_cost}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BingQuery;
