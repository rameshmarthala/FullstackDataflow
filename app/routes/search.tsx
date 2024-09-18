// app/routes/search.tsx
import SearchFetcher from "~/components/SearchFetcher";

export default function Search() {
  return (
    <div>
      <h2>Search</h2>
      {/* Render the SearchFetcher component */}
      <SearchFetcher />
      
    </div>
  );
}
