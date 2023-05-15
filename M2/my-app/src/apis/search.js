// search.js

const searchEndpoint = "https://turners-car.search.windows.net";
const apiKey = "2eJQ8p506Q7RRRVTt7YIkzm6dQdZqYkXMi6XrdUl41AzSeD7ybYc";
const indexName = "insurance";

async function search(query) {
  const url = `${searchEndpoint}/indexes/${indexName}/docs?api-version=2020-08-01&search=${encodeURIComponent(query)}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to search index: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}

export default search;
