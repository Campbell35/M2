import React, { useState } from 'react';

const BingCustomSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSearch = () => {
    const subscriptionKey = '96a6d34bff18474288eddddaea9c6bcc';
    const customConfigId = '75f0c459-7a3e-449b-bc66-1c1b68f6fa71';
    const url = `https://api.bing.microsoft.com/v7.0/custom/search?q=${query}&customconfig=${customConfigId}&mkt=en-US&subscription-key=${subscriptionKey}`;

    fetch(url, {
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data.webPages.value);
    })
    .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Prototype Bing Custom Search</h1>
      <input type="text" name="query" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <a href={result.url}>{result.name}</a>
              <p>{result.snippet}</p> {/* Rendering website description */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BingCustomSearch;
