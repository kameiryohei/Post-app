import { PostDate } from "@/app/types/types";

async function getAllPostsDate(id: string) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const detailData: PostDate = await response.json();
  return detailData;
}

const PostDetailPage = () => {
  return <div>PostDetailPage</div>;
};

export default PostDetailPage;
