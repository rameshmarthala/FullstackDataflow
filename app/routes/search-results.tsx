// app/routes/search-results.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// Loader function to handle fetching of search results
export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  // Mock data or fetch from an API
  const allResults = [
    { id: 1, name: "React" },
    { id: 2, name: "Remix" },
    { id: 3, name: "React Router" },
  ];
  // Filter results based on the search query
  const filteredResults = allResults.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return json({ results: filteredResults });
};
// Component to display the search results
export default function SearchResults() {
  const { results } = useLoaderData<{ results: { id: number; name: string }[] }>();

  if (results.length === 0) {
    return <div>No Data Found</div>;
  }
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        <>
        <h1>search result</h1>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
        </>
      </ul>
    </div>
  );
}
