import React, { useState } from 'react';

const BingSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const subscriptionKey = 'cdca5c31804a4a0cb18bb57cddb79ddd';
  const endpoint = 'https://api.bing.microsoft.com/v7.0/search';

  const handleSearch = async () => {
    try {
      const query = 'insurance price compare';
      const count = 5;
      const response = await fetch(`${endpoint}?q=${encodeURIComponent(query)}&count=${count}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey
        }
      });

      const data = await response.json();
      setSearchResults(data.webPages.value);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching search results.'); // Set error state
    }
  };

  return (
    <div>
      <h1>Prototype of Azure Bing Search</h1>
      <h5>Please click the button below for useful links</h5>
      <button onClick={handleSearch}>Click Me!!</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <a href={result.url}>{result.name}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default BingSearch;

