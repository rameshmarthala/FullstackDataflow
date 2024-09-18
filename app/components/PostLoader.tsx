// app/components/PostsLoader.tsx
import { useLoaderData } from "@remix-run/react";

// Loader function to fetch data
export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return { posts };
};

// Component to display posts
export default function PostsLoader() {
  const { posts } = useLoaderData<{ posts: { id: number; title: string }[] }>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
