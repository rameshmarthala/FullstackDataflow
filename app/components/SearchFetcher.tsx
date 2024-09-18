// app/components/SearchFetcher.tsx
import { useFetcher } from "@remix-run/react";
// Component for handling searches with input and button
export default function SearchFetcher() {
  const fetcher = useFetcher();
  const isSearching = fetcher.state === "submitting";

  return (
    <div>
      
      <fetcher.Form method="get" action="/search-results">
        <input type="text" name="query" placeholder="Search..." required
        style={{border:"2px solid black"}}/>&nbsp;
        <button type="submit" disabled={isSearching} 
          style={{border:"2px solid black"}}>
          {isSearching ? "Searching..." : "Search"}
        </button>
      </fetcher.Form>

      {/* Check if fetcher has completed and if results are empty */}
      {fetcher.data && (
        <>
          {fetcher.data.results.length === 0 ? (
            <div>No Data Found</div>
          ) : (
            <ul>
              {fetcher.data.results.map((result: { id: number; name: string }) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
