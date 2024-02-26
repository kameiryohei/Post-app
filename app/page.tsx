import PostCardList from "./components/PostCardList";
import { PostDate } from "./types/types";

async function getAllPostsDate() {
  const response = await fetch(
    "https://post-ntnqr1tl7-kameiryohei.vercel.app/api/post",
    {
      cache: "no-store",
    }
  );
  const getPosts: PostDate[] = await response.json();
  return getPosts;
}

export default async function Home() {
  const AllPosts = await getAllPostsDate();
  return (
    <main>
      <PostCardList AllPosts={AllPosts} />
    </main>
  );
}
