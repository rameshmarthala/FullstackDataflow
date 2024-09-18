// app/routes/_index.tsx
import PostsLoader, { loader as postsLoader } from "../components/PostLoader";
// Export the loader to be used in this route
export { postsLoader as loader };

export default function Index() {
  return (
    <div>
      <PostsLoader />
    </div>
  );
}
